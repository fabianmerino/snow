import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-[18px] font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/60',
        gray: 'bg-black/5  hover:bg-black/20',
        outline: 'border border-black/10 hover:bg-black/5 hover:border-black/20',
        boderless: 'hover:bg-black/5',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/60',
      },
      size: {
        default: 'px-4 py-2',
        sm: 'rounded-sm px-2 py-1 text-sm',
        lg: 'rounded-lg px-6 py-4',
        icon: 'w-10 h-10',

      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
