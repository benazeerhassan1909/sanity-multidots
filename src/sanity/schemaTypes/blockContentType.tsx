import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon} from '@sanity/icons'
import { ReactNode, FC } from 'react';

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
interface HighlightDecoratorProps {
  children: ReactNode;
}

const HighlightDecorator: FC<HighlightDecoratorProps> = (props) => (
  <span style={{ backgroundColor: '#E8FF00' }}>{props.children}</span>
)
export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        { title: 'Quote', value: 'blockquote' },
        
        // 👇 Add text alignment styles
        { title: 'Align Left', value: 'left' },
        { title: 'Align Center', value: 'center' },
        { title: 'Align Right', value: 'right' },
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          {title: 'Strong', value: 'strong'},
          { title: 'Emphasis', value: 'em' },
          {
            title: 'Span', value: 'span', icon: () => 'Span', component: HighlightDecorator
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // defineArrayMember( {
    //   type: 'table',
    // }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
  ],
})
