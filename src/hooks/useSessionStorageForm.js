import { useEffect } from "react";

const useSessionStorageForm = (formValues, setValue) => {
  useEffect(() => {
    // Load data from sessionStorage on mount
    const savedFormData = sessionStorage.getItem("formData");
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  useEffect(() => {
    // Save form data to sessionStorage when formValues change
    sessionStorage.setItem("formData", JSON.stringify(formValues));
  }, [formValues]);
};

export default useSessionStorageForm;
