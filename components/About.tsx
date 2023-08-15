import AppLink from "@/components/AppLink";
import Card from "components/Card";

const About = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Card className="xl:w-2/4 md:w-3/4 p-5">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center ">
          <div className="flex justify-center">
            <img
              src="/images/main_area.webp"
              alt="main-area"
              className="rounded-xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span>
              Στο
              <strong className="text-accent-focus">
                &nbsp;I Ching : balance way&nbsp;
              </strong>
              παρέχουμε ένα πλήρες εφαρμοσμένο θεραπευτικό πρόγραμμα το οποίο
              επιδιώκει την ισορροπία του ανθρώπινου οργανισμού.
              <br />
              <br /> Εκτός από συγκεκριμένες εσωτερικές και εξωτερικές παθήσεις,
              η
              <AppLink href="/wiki/chinese-medicine">
                &nbsp;ολιστική προσέγγιση&nbsp;
              </AppLink>
              και η
              <AppLink href="/wiki/tecar-therapy">
                &nbsp;κινέζικη ιατρική&nbsp;
              </AppLink>
              συμπληρώνουν έναν υγιή και ισορροπημένο τρόπο ζωής.
              <br />
              <br /> Η
              <strong className="text-accent-focus">
                &nbsp;Κατερίνα Δημητρακοπούλου&nbsp;
              </strong>
              έχει πιστοποιηθεί στη θερμοθεραπεία με
              <AppLink href="/wiki/moxibustion">&nbsp;μόξα</AppLink>, στη μάλαξη
              με
              <AppLink href="/wiki/cupping-therapy">
                &nbsp;βεντούζες φωτιάς
              </AppLink>
              , στη
              <AppLink href="/wiki/diet-plan">
                &nbsp;συμβουλευτική διατροφής&nbsp;
              </AppLink>
              σύμφωνα με την κινεζική ιατρική και στο
              <AppLink href="/wiki/acupuncture">
                &nbsp;βελονισμό Balance
              </AppLink>
              .
            </span>
            <AppLink href="/services" className="mt-2 self-start">
              Υπηρεσίες που προσφέρουμε...
            </AppLink>
          </div>
        </section>
      </Card>
    </section>
  );
};

export default About;
