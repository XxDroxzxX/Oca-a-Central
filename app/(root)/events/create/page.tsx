import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section style={{
        backgroundImage: `url(https://media.istockphoto.com/id/1366076842/fr/photo/concert-et-festival-foule-de-gens-qui-font-la-f%C3%AAte.jpg?s=170667a&w=0&k=20&c=LFDYmlWasTKzifhl0qhgqJMNIUx2kU3eVsiZfk4QV2k=)`}} >
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent