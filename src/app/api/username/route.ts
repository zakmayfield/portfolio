import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { UsernameValidator } from '@/lib/validators/username';
import { z } from 'zod';

export async function PATCH(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 });
    }

    const body = await req.body;
    const { username } = UsernameValidator.parse(body);

    const usernameIsTaken = await db.user.findFirst({
      where: {
        username,
      },
    });

    if (usernameIsTaken) {
      return new Response('Username is taken', { status: 409 });
    }

    await db.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        username,
      },
    });
  } catch (error) {
    error;

    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response(
      'Could not update username at this time. Please try later',
      { status: 500 }
    );
  }
}
