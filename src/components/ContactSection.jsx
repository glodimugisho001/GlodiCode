import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      type: Yup.string(), // optionnel
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      await submit("", values);
      // Si la réponse est un succès → reset du formulaire
      if (response?.type === "success") {
        resetForm();
      }
    },
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
    }
  }, [response, onOpen]);

  return (
    <div
      isDarkBackground
      className="bg-[#512DA8] flex justify-center items-center space-y-8"
    >
      <div className="w-full max-w-[1024px] p-8 md:p-32 flex flex-col items-start">
        <h1 className=" mb-6 text-4xl font-bold text-white" id="contactme-section">
          Contact me
        </h1>
        <div className="bg-white p-6 rounded-md w-full">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col space-y-4">
              {/* First Name */}
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                  className={`w-full p-2 border rounded-md ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  className={`w-full p-2 border rounded-md ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                )}
              </div>

              {/* Type */}
              <div className="flex flex-col">
                <label htmlFor="type" className="text-sm font-medium mb-1">
                  Type of enquiry
                </label>
                <select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                  className="w-full p-2 border border-gray-300 rounded-md bg-white"
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Comment */}
              <div className="flex flex-col">
                <label htmlFor="comment" className="text-sm font-medium mb-1">
                  Your message
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  {...formik.getFieldProps("comment")}
                  className={`w-full p-2 border rounded-md h-[250px] ${
                    formik.touched.comment && formik.errors.comment
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.comment && formik.errors.comment && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.comment}</div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-md transition-colors"
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
