import AppLink from "@/components/AppLink";
import Card from "@/components/Card";

const Doctor = () => (
  <section className="w-full flex flex-col items-center justify-center">
    <Card className="p-5 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 w-full md:max-w-xl">
      <figure className="flex flex-col items-center justify-center">
        <img
          src="/images/doctor.webp"
          alt="katerina-dimitrakopoulou"
          className="rounded-xl object-cover"
          height={300}
          loading="lazy"
        />
      </figure>

      <section>
        Η
        <strong className="text-accent-focus">
          &nbsp;Κατερίνα Δημητρακοπούλου&nbsp;
        </strong>
        έχει πιστοποιηθεί στη θερμοθεραπεία με
        <AppLink href="/wiki/tecar-therapy">&nbsp;μόξα</AppLink>, στη μάλαξη με
        <AppLink href="/wiki/tecar-therapy">&nbsp;βεντούζες φωτιάς</AppLink>,
        στη
        <AppLink href="/wiki/tecar-therapy">
          &nbsp;συμβουλευτική διατροφής&nbsp;
        </AppLink>
        σύμφωνα με την κινεζική ιατρική και στο
        <AppLink href="/wiki/tecar-therapy">&nbsp;βελονισμό Balance</AppLink>
      </section>
    </Card>
  </section>
);

export default Doctor;
