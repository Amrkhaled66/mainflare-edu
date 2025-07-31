import Accordion from '@/shared/components/ui/Accordion';
import { accordionIcon } from '@/shared/utils/defaultSettings';
import { useActiveSubSection } from '../../../context/activeSubSectionCtx';

const CourseContent = ({ courseContent, coursePageContent }: { courseContent: any; coursePageContent?: boolean }) => {
    const { activeSubSection, updateSubSection } = useActiveSubSection();

    return (
        <div className="space-y-3">
            <div className={`space-y-6 rounded-3xl bg-bgBackground ${coursePageContent ? 'p-0' : 'p-4'}`}>
                {courseContent.map((section: any) => (
                    <Accordion key={section.id} header={section.name}>
                        <div className="flex flex-col gap-y-4">
                            {section.subSections.map((subSection: any) => {
                                const isActive = activeSubSection?.id === subSection.id;

                                // Dynamic button label
                                const getButtonLabel = () => {
                                    switch (subSection.type) {
                                        case 'video':
                                            return isActive ? 'تشاهد الآن' : 'مشاهدة الفيديو';
                                        case 'book':
                                            return isActive ? 'جاري العرض' : 'عرض المذكرة';
                                        case 'exam':
                                            return isActive ? 'قيد الامتحان' : 'بدء الامتحان';
                                        default:
                                            return 'عرض';
                                    }
                                };

                                // Unified button style
                                const buttonClass = isActive
                                    ? 'border rounded-[var(--btn-radius)] px-4 h-10 !border-white text-white bg-mainColor'
                                    : 'btn-outline px-4 h-10';

                                return (
                                    <Accordion
                                        accordionIcon={accordionIcon[subSection.type as keyof typeof accordionIcon]}
                                        isSubSection
                                        bg={`${isActive ? 'bg-mainColor text-white' : 'bg-mainColor-50'}`}
                                        key={subSection.id}
                                        header={subSection.name}
                                    >
                                        <div className="space-y-3">
                                            <p>
                                                <span className="font-medium">الوصف:</span>{' '}
                                                <span>{subSection.name}</span>
                                            </p>

                                            <button
                                                className={buttonClass}
                                                disabled={isActive}
                                                onClick={() => {
                                                    if (!isActive) updateSubSection(subSection);
                                                }}
                                            >
                                                {getButtonLabel()}
                                            </button>
                                        </div>
                                    </Accordion>
                                );
                            })}
                        </div>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};

export default CourseContent;
