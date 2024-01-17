import ContactsFooter from '@/src/components/Footer/ContactsFooter'
import ContactsMobileFooter from '@/src/components/Footer/ContactsMobileFooter'
import Header from '@/src/components/Header/Header'
import ShowDiscount from '@/src/components/ShowDiscount/ShowDiscount'
import WeUseCookie from '@/src/components/WeUseCookie/WeUseCookie'
import { getContacts } from '@/src/service/requests'

export const dynamic = 'force-dynamic'

export default async function page() {

  let contactsData = await getContacts()

  return (
    <>
      <Header contacts={contactsData.data} />
      <div>
        <WeUseCookie />
        <ShowDiscount contacts={contactsData.data} />

        <div className="bg-[#2D2D2D]">
          <div className="xs:max-md:hidden"><ContactsFooter contacts={contactsData.data} /></div>
          <div className="md:hidden"><ContactsMobileFooter contacts={contactsData.data} /></div>
        </div>

      </div>
    </>
  )
}
