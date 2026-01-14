import { ErrorMessage, Field, Form, Formik } from "formik";
import { formatPrice } from "../../utils";
import * as Yup from "yup";
import { useState } from "react";
import SuccessModal from "./SuccessModal.tsx";

const checkoutValidationSchema = Yup.object({
  firstName: Yup.string().min(2, "Too shot").required("First name is required"),
  lastName: Yup.string().min(2, "Too shot").required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\+?[0-9]{7,15}$/, "Invalid phone number")
    .required("Phon is required"),
  country: Yup.string().required("Country is required"),
  address: Yup.string().required("Address is required"),
  zip: Yup.string().min(4, "Too shot").required("Zip code is required"),
});

type CheckoutModalProps = {
  onClose: () => void;
  subtotal: number;
  closeCart: () => void;
  cartItems: {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
  }[];
};

const CheckoutModal = ({
  onClose,
  subtotal,
  cartItems,
}: CheckoutModalProps) => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-30"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-[90%] max-w-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-8 uppercase">
          Lamashop <span className="tracking-widest font-normal">checkout</span>
        </h2>

        <hr className="border-gray-400 mb-10" />
        <div className="flex gap-6 items-start justify-center">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              country: "",
              address: "",
              zip: "",
            }}
            validationSchema={checkoutValidationSchema}
            onSubmit={(values, { resetForm }) => {
              setCustomerLastName(values.lastName);
              setCustomerFirstName(values.firstName);
              setIsSuccessOpen(true);
              resetForm();
            }}
          >
            {() => (
              <Form className="flex flex-col gap-3 mb-4 w-full">
                <h2 className="font-semibold text-lg mb-4">Customer details</h2>
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex flex-col gap-1">
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First name*"
                      className="border px-3 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="p"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last name*"
                      className="border px-3 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="p"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email*"
                      className="border px-3 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Field
                      name="phone"
                      type="tel"
                      placeholder="Phone*"
                      className="border px-3 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="font-semibold text-lg mb-4">
                    Delivery details
                  </h2>

                  <div className="flex flex-col gap-1">
                    <Field
                      type="text"
                      name="country"
                      placeholder="Country/Region*"
                      className="border px-3 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="country"
                      component="p"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Field
                      type="text"
                      name="address"
                      placeholder="City*"
                      className="border px-3 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="address"
                      component="p"
                      className="text-red-500 text-xs "
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Field
                      type="text"
                      name="zip"
                      placeholder="Zip/Postal code*"
                      className="border px-3 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="zip"
                      component="p"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>

                <div className="flex gap-3 justify-end mt-4">
                  <button
                    type="button"
                    className="w-full px-4 py-2 border rounded-md"
                    onClick={onClose}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-black text-white rounded-md"
                  >
                    Continue
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          {isSuccessOpen && (
            <SuccessModal
              firstName={customerFirstName}
              lastName={customerLastName}
              onClose={() => {
                setIsSuccessOpen(false);
                onClose();
              }}
            />
          )}
          <div className="bg-gray-200 rounded-lg w-full p-3">
            <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

            <hr className="border-gray-300 mb-4 mt-4" />
            <div className="flex flex-col gap-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div className="text-sm">
                    <p className="font-medium">{item.name}</p>
                    <p>
                      {item.quantity} × ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <hr className="border-gray-300 mt-4 mb-4" />
            <p className="text-sm mt-2 flex justify-between">
              Subtotal <b>{formatPrice(subtotal)}</b>
            </p>
            <p className="text-sm mt-2 flex justify-between">
              Delivery <b>Free</b>
            </p>
            <p className="text-sm mt-2 flex justify-between">
              Sales Tax <b>{formatPrice(0)}</b>
            </p>
            <hr className="border-gray-300 mb-4 mt-4" />
            <p className="text-sm mt-2 flex justify-between">
              Total <b>{formatPrice(subtotal)}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
