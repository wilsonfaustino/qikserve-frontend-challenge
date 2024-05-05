export function Cart() {
  return (
    <div className="bg-app-400 h-full min-h-[129px] w-[320px] shadow-lg">
      <div className="flex h-16 items-center px-6">
        <h2 className="text-app-800 text-2xl font-medium">Carrinho</h2>
      </div>
      <div className="flex h-16 items-center bg-white px-6">
        <p className="text-app-800">Seu carrinho está vazio</p>
      </div>
    </div>
  )
}
