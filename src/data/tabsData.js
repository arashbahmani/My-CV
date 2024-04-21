import {
  CollectionsRounded,
  ConnectWithoutContactRounded,
  FaceRounded,
  HomeRounded,
  SchoolRounded,
  TextSnippetRounded,
  MarkAsUnreadRounded,
} from "@mui/icons-material";

const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

export const tabsData = () => {
  const tabs = [
    { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
    { label: "مشخصات فردی", icon: <FaceRounded />, ...tabProps(1) },
    { label: "مشخصات حرفه‌ای", icon: <TextSnippetRounded />, ...tabProps(2) },
    { label: "سوابق و نمونه‌کارها", icon: <SchoolRounded />, ...tabProps(3) },
    {
      label: "ارتباط با من",
      icon: <ConnectWithoutContactRounded />,
      ...tabProps(4),
    },
    { label: "گالری تصاویر", icon: <CollectionsRounded />, ...tabProps(5) },
    { label: "وبلاگ شخصی", icon: <MarkAsUnreadRounded />, ...tabProps(6) },
  ];

  return tabs;
};
