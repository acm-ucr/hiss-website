import React from "react";
import Header from "../Header.jsx"; // previously was: src/components/Header
import Image from "next/image";
import About from "../../../public/images/about.png";

const HISS = () => {
  return (
    <div className="flex-col items-center justify-center inline-flex gap-10 w-1/2">
      <Header text="About HISS" />
      <p>
        The Highlander Statistics Society (HiSS) is a student organization whose
        purpose is to form unity and friendship among students majoring or
        interested in statistics. HiSS works to promote scholarship and interest
        in statistics while informing people about opportunities and challenges
        that are present in the field. Through social, academic, and service
        events, HiSS strives to build a strong community among its club members
        in addition to encouraging involvement and success in statistics.
      </p>
      <Image className="rounded-full w-5/6 " src={About} alt="HISS Image" />
      <p>
        The Highlander Statistics Society (HiSS) aims to bring together students
        who are interested in statistics across various disciplines. The club
        was founded in Spring 2010 and has been a consistent source of
        assistance and opportunity for undergraduates. HiSS works to promote
        academic achievement by fostering a supportive environment where
        students can learn and collaborate together. Club activities include R
        and Python coding workshops, social events, community service, and
        participation in the annual Datafest competition.
      </p>
    </div>
  );
};

export default HISS;
