import { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import MainContext from "../context";
import SidebarContainer from "./SidebarContainer";
import PageContainer from "./PageContainer";
import ThemeActionButton from "../components/ThemeActionButton";
import Slidebar from "../components/slidebar/Slidebar";

import DrowerActionButton from "../components/drawer/DrowerActionButton";
import SwipeableViews from "react-swipeable-views";

import { ToastContainer, toast } from "react-toastify";

import {
  Home,
  Page,
  PersonalInfo,
  ProfecionalInfo,
  Records,
  Contacts,
  Gallery,
  Blog,
} from "../pages";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState("dark");

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };

  const handlepageChange = (index) => {
    setPageNumber(index);
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleThemeChange,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Slidebar />
        </SidebarContainer>

        <PageContainer>
          <SwipeableViews
            enableMouseEvents
            axis="x"
            index={pageNumber}
            onChangeIndex={handlepageChange}
          >
            <Page pageNumber={pageNumber} index={0}>
              <Home helmetTitle="آرش بهمنی | وبسایت شخصی" />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <PersonalInfo helmetTitle="اطلاعات شخصی | آرش بهمنی" />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <ProfecionalInfo helmetTitle="اطلاعات تخصصی | آرش بهنی" />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Records helmetTitle="سوابق و نمونه‌کار | آرش بهمنی" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Contacts helmetTitle="تماس با من | آرش بهمنی" />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Gallery helmetTitle="گالری تصاویر | آرش بهمنی" />
            </Page>
            <Page pageNumber={pageNumber} index={6}>
              <Blog helmetTitle="بلاگ من | آرش بهمنی" />
            </Page>
          </SwipeableViews>
        </PageContainer>

        <DrowerActionButton />
        <ThemeActionButton />
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
