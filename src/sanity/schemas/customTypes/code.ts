import { defineType } from 'sanity'

export default defineType ({
    name: 'code',
    type: 'object',
    fields: [
      {
        name: 'code',
        type: 'string',
        title: 'Code block',
        description: 'Testing to make things work',
        // hidden: ({ parent }) => !parent?.asset,
        // validation: Rule => [
        //   Rule.required(),
        // ],
        // options: {
        //   isHighlighted: true,
        // }
      },
      // {
      //   name: 'caption',
      //   type: 'string',
      //   title: 'Caption',
      //   hidden: ({ parent }) => !parent?.asset,
      //   options: {
      //     isHighlighted: true
      //   }
      // }
    ]
  }) 