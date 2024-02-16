export interface HomePageData {
  banner_content: {
    image: string;
    title: string;
    text: string;
    description: string;
  };
  news_section: {
    title: string;
    card1: string;
    card2: string;
    card3: string;
    card4: string;
  };
  services_section: {
    title: string;
    img1: string;
    text01: string;
    text02: string;
    text03: string;
  };
  partnersSection: {
    description: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
  };
}

export interface AboutUsPageData {
  [x: string]: any;
  about_section: {
    image: string;
    title: string;
    description: string;
  };

  krik_Section: {
    title: string;
    text1: string;
    description1: string;
    text2: string;
    description2: string;
    text3: string;
    description3: string;
  };
  faq_Section: {
    heading: string;
    text01: string;
    description01: string;
    text02: string;
    description02: string;
    text03: string;
    description03: string;
    text04: string;
    description04: string;
    text05: string;
    description05: string;
  };
}

export interface ServicesPageData {
  serviceSection: {
    title1: string;
    heading1: string;
    text01: string;
    title2: string;
    heading2: string;
    text02: string;
    title3: string;
    heading3: string;
    text03: string;
  };

  service_Block: {
    title: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
  };
}

export interface OurTeamPageData {
  meetour_Team: {
    members: any;
    heading: string;
    image1: string;
    name1: string;
    description1: string;
    image2: string;
    name2: string;
    description2: string;
    image3: string;
    name3: string;
    description3: string;
  };
  teamMembers: {
    heading: string;
    title: string;
    text: string;
    description: string;
    image1: string;
    image2: string;
    image3: string;
  };
}

export interface OurVolunteersPageData {
  ourVolunteer_section: {
    heading: string;
    title1: string;
    title2: string;
    image01: string;
    name1: string;
    description01: string;
    image02: string;
    name2: string;
    description02: string;
    image03: string;
    name3: string;
    description03: string;
    image04: string;
    name4: string;
    description04: string;
    image05: string;
    name5: string;
    description05: string;
    image06: string;
    name6: string;
    description06: string;
    image07: string;
    name7: string;
    description07: string;
    image08: string;
    name8: string;
    description08: string;
    image09: string;
    name9: string;
    description09: string;
    image10: string;
    name10: string;
    description10: string;
    image11: string;
    name11: string;
    description11: string;
    image12: string;
    name12: string;
    description12: string;
  };
}

export interface DonatePageData {
  donate_Section: {
    title: string;
    description1: string;
    description2: string;
    text: string;
    description3: string;
    text2: string;
    donatorname: string;
    donatoremail: string;
    donatorphone: string;
    donatorprice: string;
    donatorcard: string;
    donatorcardname: string;
  };
}

export interface ProjectsPageData {
  projectBlocks: {
    heading: string;
    title1: string;
    title2: string;
    text: string;
    projectimg1: string;
    projectimg2: string;
    projectimg3: string;
    projectimg4: string;
    title3: string;
    projectimg5: string;
    projectimg6: string;
    projectimg7: string;
    projectimg8: string;
    projectimg9: string;
    projectimg10: string;
    projectimg11: string;
  };
}

export interface NewsLetterPageData {
  newsBlock: {
    bannertext: string;
    bannertext2: string;
    date: string;
    datetext: string;
    date2: string;
    datetext2: string;
    date3: string;
    datetext3: string;
    image1: string;
    image2: string;
    image3: string;
  };
}

export interface DocumentsPageData {
  archiveSection: {
    heading1: string;
    heading2: string;
    heading3: string;
    date1: string;
    date2: string;
    date3: string;
    text: string;
    btntext: string;
    icon: string;
  };
}
