'use client'

import * as Dialog from '@radix-ui/react-dialog'
import type { ReactNode } from 'react'

import { cn } from '~/utils/classnames'

import { CloseIcon } from '../icons/close-icon'

type RootProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

function Root({ open, onOpenChange, children }: RootProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}

type ModalContentProps = { children: ReactNode; accentColor?: string }

function ModalContent({ children, accentColor = 'black' }: ModalContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
      <Dialog.Content
        className={cn(
          'fixed inset-0 w-full bg-white text-gray-900 shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]',
          'md:left-1/2 md:top-1/2 md:h-full md:max-h-4/5 md:max-w-[480px] md:-translate-x-1/2 md:-translate-y-1/2',
        )}
      >
        {children}
        <Dialog.Close className="absolute right-[18px] top-[18px] z-50 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500">
          <CloseIcon className="h-3 w-3" accentColor={accentColor} />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export const Modal = Object.assign(Root, { Button: Dialog.Trigger, Close: Dialog.Close, Content: ModalContent })
