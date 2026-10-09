import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

const CART_STORAGE_KEY = "ecommerce-cart";

const loadCartItems = (productToAdd) => {
  const savedItems = localStorage.getItem(CART_STORAGE_KEY);
  const cartItems = savedItems ? JSON.parse(savedItems) : [];

  if (!productToAdd) {
    return cartItems;
  }

  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item,
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(() =>
    loadCartItems(location.state?.product),
  );

  useEffect(() => {
    if (location.state?.product) {
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.pathname, location.state, navigate]);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
  };

  const changeQuantity = (productId, amount) => {
    const updatedItems = cartItems.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item,
    );

    updateCart(updatedItems);
  };

  const removeItem = (productId) => {
    updateCart(cartItems.filter((item) => item.id !== productId));
  };

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Math.round(Number(item.price.replace("$", "")) * 100) * item.quantity,
    0,
  );

  return (
    <main className="min-h-screen bg-amber-100 px-4 py-10 sm:px-8 lg:px-16">
      <section className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-black sm:text-4xl">
          Your shopping cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="rounded-xl bg-white p-8 text-center shadow-md sm:p-12">
            <p className="text-xl font-semibold text-gray-800">
              Your cart is empty.
            </p>
            <p className="mt-2 text-gray-600">
              Browse our posters and add something you like.
            </p>
            <Link
              to="/posters"
              className="mt-6 inline-block rounded-md bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
            >
              Browse posters
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-md sm:flex-row sm:items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-36 w-full rounded-md bg-white object-contain sm:w-36"
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h2>
                    <p className="mt-1 font-bold text-amber-700">
                      {item.price}
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => changeQuantity(item.id, -1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="rounded border border-gray-300 p-2 hover:bg-gray-100"
                      >
                        <FiMinus />
                      </button>
                      <span className="min-w-6 text-center" aria-live="polite">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => changeQuantity(item.id, 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="rounded border border-gray-300 p-2 hover:bg-gray-100"
                      >
                        <FiPlus />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="ml-2 flex items-center gap-2 text-sm font-medium text-red-700 hover:text-red-900"
                      >
                        <FiTrash2 />
                        Remove
                      </button>
                    </div>
                  </div>

                  <p className="font-bold text-gray-900">
                    $
                    {(
                      (Math.round(Number(item.price.replace("$", "")) * 100) *
                        item.quantity) /
                      100
                    ).toFixed(2)}
                  </p>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-xl bg-white p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900">Order summary</h2>
              <div className="mt-5 flex justify-between border-b border-gray-200 pb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${(subtotal / 100).toFixed(2)}</span>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Shipping and any taxes are calculated at checkout.
              </p>
              <Link
                to="/placeorder"
                className="mt-6 block rounded-md bg-black px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-amber-700"
              >
                Proceed to checkout
              </Link>
              <Link
                to="/posters"
                className="mt-4 block text-center text-sm font-medium text-gray-700 underline hover:text-amber-800"
              >
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
};

export default Cart;
