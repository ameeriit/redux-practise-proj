import dynamic from "next/dynamic";

import { getDictionary } from "./dictionaries";
import { ValidLocales } from "./langTypes";

export default async function Page({
  params: { lang },
}: {
  params: { lang: ValidLocales };
}) {
  const dict = await getDictionary(lang);

  const UserDataAfterLogin = dynamic(
    () => import("../../components/UserDataAfterLogin"),
    { ssr: false }
  );

  return (
    <div className="container mx-auto px-10">
      <div className="pt-6">
        <h1 className="text-4xl pb-12 text-center">This is Home Page</h1>
        <div className="mb-8">
          <p>{dict.form.username}</p>
          <p>{dict.form.password}</p>
          <p>{dict.about_us}</p>
          <p>{dict.contact_us}</p>
          <p>{dict.description}</p>
        </div>

        <UserDataAfterLogin />
      </div>
    </div>
  );
}
