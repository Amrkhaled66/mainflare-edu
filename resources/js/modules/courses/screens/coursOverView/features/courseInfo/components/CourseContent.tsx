import Accordion from '@/shared/components/ui/Accordion';
import { accordionIcon } from '@/shared/utils/defaultSettings';

const CourseContent = ({ courseContent, coursePageContent }: { courseContent: any; coursePageContent?: boolean }) => {
    return (
        <div className="space-y-3">
            {/* <h2 className="text-xl font-bold lg:text-2xl">محتوي الكورس</h2> */}

            <div className={`space-y-6 rounded-3xl bg-bgBackground ${coursePageContent ? 'p-0' : 'p-4'}`}>
                {courseContent.map((section: any) => {
                    return (
                        <Accordion key={section.id} header={section.name}>
                            <div className="flex flex-col gap-y-4">
                                {section.subSections.map((subSection: any) => (
                                    <Accordion
                                        accordionIcon={accordionIcon[subSection.type as keyof typeof accordionIcon]}
                                        isSubSection
                                        bg="bg-mainColor-50"
                                        key={subSection.id}
                                        header={subSection.name}
                                    >
                                        <p>
                                            <span> الوصف :</span>
                                            <span> {subSection.name} </span>
                                        </p>
                                    </Accordion>
                                ))}
                            </div>
                        </Accordion>
                    );
                })}
            </div>
        </div>
    );
};

export default CourseContent;
