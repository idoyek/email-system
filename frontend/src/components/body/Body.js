// import Email from "./Email";
import EmailsList from "./EmailsList";

export default function Body({ inboxEmailsList }) {
  return (
    <div>
        <EmailsList inboxEmailsList={inboxEmailsList} />
    </div>
  );
}
