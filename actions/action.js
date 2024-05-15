'use server';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const prisma = new PrismaClient();

export const addBlog = async (formData) => {
  // collect info from form using formData
  const imageUrl = formData.get('imageUrl');
  const title = formData.get('title');
  const category = formData.get('category');
  const description = formData.get('description');
  console.log(title, imageUrl, category, description);

  //   const new_blog = await prisma.blog.create({
  //     data: {
  //       imageUrl: imageUrl ? imageUrl : null,
  //       title,
  //       category,
  //       description,
  //     },
  //   });
  return { imageUrl, title, category, description };
  //evalidatePath('/blogs/add-blog');

  //redirect('/blogs');
};
