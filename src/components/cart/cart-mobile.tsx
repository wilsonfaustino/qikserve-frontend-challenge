'use client'

import { CountPicker } from '../count-picker'
import { Modal } from '../modal'
import { useCart } from './hooks/cart'

export function CartMobile() {
  const { cartItems, cartTotal, formatPrice, handleQuantity, handleCheckout, styleSettings, subTotal } = useCart()

  const itemsAmountText = cartItems.length === 1 ? 'item' : 'items'

  if (cartItems.length === 0) return null

  return (
    <div className="p-4">
      <Modal>
        <Modal.Button asChild>
          <button
            type="button"
            className="h-12 w-full rounded-full text-lg font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
            style={{ backgroundColor: styleSettings?.primaryColour }}
          >
            {`Your basket • ${cartItems.length} ${itemsAmountText}`}
          </button>
        </Modal.Button>
        <Modal.Content>
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex w-full flex-col">
              <header className="flex h-16 w-full items-center justify-center">
                <h2 className="text-2xl font-bold text-app-800">Basket</h2>
              </header>

              <div className="flex w-full flex-col bg-white shadow-sm">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${Math.random()}`} className="px-4 pb-4 pt-2 text-left">
                    <div className="flex items-center justify-between">
                      <h3>{item.name}</h3>
                      <p>{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    {item.modifiers && (
                      <ul>
                        {item.modifiers.map((modifier) => (
                          <li key={modifier.id} className="opacity-50">
                            {modifier.name}
                          </li>
                        ))}
                      </ul>
                    )}
                    <CountPicker
                      baseColor={styleSettings?.primaryColour}
                      size="sm"
                      value={item.quantity}
                      onChange={(val) => handleQuantity(item, val)}
                    />
                  </div>
                ))}
              </div>
              <div className="flex h-16 items-center justify-between border-b-2 px-6">
                <p>Subtotal</p>
                <p>{formatPrice(subTotal)}</p>
              </div>
              <div className="flex h-16 items-center justify-between px-6 text-2xl">
                <p>Total:</p>
                <p className="font-bold">{formatPrice(cartTotal)}</p>
              </div>
            </div>
            <div className="flex h-20 w-full px-6 pb-6 pt-2">
              <button
                onClick={handleCheckout}
                type="button"
                className="h-12 w-full rounded-full text-lg font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: styleSettings?.primaryColour }}
              >
                Checkout
              </button>
            </div>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}
