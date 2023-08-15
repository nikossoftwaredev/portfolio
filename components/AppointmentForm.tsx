"use client";

import {
  HTMLInputTypeAttribute,
  MouseEvent,
  useCallback,
  useState,
} from "react";
import Button from "components/Button";
import Card from "components/Card";
import TextField from "components/TextField";
import SectionTitle from "components/SectionTitle";
import TextArea from "components/TextArea";
import dayjs from "dayjs";

const initFormData = {
  name: "",
  phone: "",
  date: dayjs().format("YYYY-MM-DD"),
  email: "",
  info: "",
};

interface InputFieldProps {
  id: string;
  dataField: keyof typeof initFormData;
  inputType: HTMLInputTypeAttribute;
  placeholder: string;
  required: boolean;
  colSpan?: number;
}

const inputFields: InputFieldProps[] = [
  {
    id: "name",
    dataField: "name",
    inputType: "text",
    placeholder: "Όνομα",
    required: true,
  },
  {
    id: "email",
    dataField: "email",
    inputType: "email",
    placeholder: "Email",
    required: true,
  },
  {
    id: "phone",
    dataField: "phone",
    inputType: "tel",
    placeholder: "Τηλέφωνο",
    required: true,
  },
  {
    id: "date",
    dataField: "date",
    inputType: "date",
    placeholder: "Ημερομηνία Ραντεβού",
    required: true,
  },
  {
    id: "info",
    dataField: "info",
    inputType: "textarea",
    placeholder: "Επιπλέον Πληροφορίες",
    required: false,
    colSpan: 2,
  },
];

const AppointmentForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<Record<string, any>>(initFormData);

  const onChangeFormData = useCallback(
    (dataField: string) => (e: any) => {
      setFormData((prev) => ({ ...prev, [dataField]: e.target.value }));
    },
    []
  );

  const onSendEmail = useCallback(
    async (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setLoading(true);

      try {
        await fetch("/api/send-mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formData,
          }),
        });
        setFormData(initFormData);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    },
    [formData]
  );

  const disabled = inputFields.some((inputField) => {
    const { dataField, required } = inputField;
    const missingInfo = !formData[dataField];

    return required && missingInfo;
  });

  return (
    <main className="flex items-center justify-center flex-col">
      <SectionTitle title="ΚΛΕΙΣΕ ΡΑΝΤΕΒΟΥ" />
      <Card className="mb-5 w-full max-w-[600px]">
        <form>
          <div className="grid p-4 gap-2 sm:grid-cols-1 md:grid-cols-2">
            {inputFields.map((inputField) => {
              const {
                dataField,
                inputType,
                placeholder,
                required,
                colSpan,
                id,
              } = inputField;

              return inputType === "textarea" ? (
                <TextArea
                  key={dataField}
                  className={colSpan ? "col-span-full" : ""}
                  required={false}
                  rows={4}
                  autoComplete={id}
                  value={formData.info as string}
                  placeholder="Επιπλέον Πληροφορίες"
                  onChange={onChangeFormData("info")}
                  name={id}
                />
              ) : (
                <TextField
                  id={id}
                  key={dataField}
                  className={colSpan ? "col-span-full" : ""}
                  required={required}
                  type={inputType}
                  value={formData[dataField as string]}
                  placeholder={placeholder}
                  autoComplete={id}
                  onChange={onChangeFormData(dataField)}
                  name={id}
                />
              );
            })}
            <Button
              className="mt-5"
              onClick={onSendEmail}
              disabled={disabled}
              loading={loading}
              type="submit"
            >
              Κλεισε Ραντεβου
            </Button>
          </div>
        </form>
      </Card>
    </main>
  );
};

export default AppointmentForm;
