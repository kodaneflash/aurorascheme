'use server';

import { enhanceAction } from '@kit/next/actions';
import { getSupabaseServerActionClient } from '@kit/supabase/server-actions-client';

import { TextTestimonialFormSchema } from '../schema/create-testimonial.schema';
import { createTestimonialService } from './testimonial.service';

export const createTestimonialAction = enhanceAction(
  async (data) => {
    const client = getSupabaseServerActionClient({ admin: true });
    const service = createTestimonialService(client);

    await service.insertTestimonial(data);

    return { success: true };
  },
  {
    schema: TextTestimonialFormSchema,
    auth: false,
  },
);
