import Button from "@/components/Button";
import { useCallback } from "react";

const AppointmentScroll = () => {
  const scrollToAppointment = useCallback(() => {
    const appointmentDiv = document.getElementById("name");

    if (appointmentDiv) {
      appointmentDiv.scrollIntoView({ behavior: "smooth", block: "center" });
      appointmentDiv.focus();
    }
  }, []);

  return (
    <Button className="animate-pulse-scale" onClick={scrollToAppointment}>
      Κλεισε Ραντεβου
    </Button>
  );
};

export default AppointmentScroll;
