import PageTitle from '@/shared/components/ui/PageTitle';
import ContactForm from './features/ContactForm/ContactForm';
import SiteInfo from './features/SiteInfo/SiteInfo';
const ContactUsScreen = () => {
    return (
        <div className="container flex-1 space-y-8 text-textColor">
            <PageTitle title="تواصل معنا" />
            <div className="flex flex-col gap-6 lg:flex-row">
                <SiteInfo />
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactUsScreen;
