import React from "react";
import Header from "../Header.jsx"; // previously was: src/components/Header
import Image from "next/image";
import About from "../../../public/images/about.png";

const HISS = () => {
  return (
    <div className="flex-col items-center justify-center ml-1 inline-flex">
      <Header text="About HISS" />
      <p>
        The Highlander Statistics Society (HiSS) is a student organization whose
        <br></br>
        purpose is to form unity and friendship among students majoring or
        <br></br>
        interested in statistics. HiSS works to promote scholarship and interest
        in<br></br>
        statistics while informing people about opportunities and challenges
        that are<br></br>
        present in the field. Through social, academic, and service events, HiSS
        strives<br></br>
        to build a strong community among its club members in addition to
        <br></br>
        encouraging involvement and success in statistics.
      </p>
      <Image
        className="rounded-full w-4/6 h-1/3 py-5 px-10"
        src={About}
        alt="HISS Image"
      />
      <p>
        The Highlander Statistics Society (HiSS) aims to bring together students
        who<br></br>
        are interested in statistics across various disciplines. The club was
        founded in<br></br>
        Spring 2010 and has been a consistent source of assistance and
        opportunity<br></br>
        for undergraduates. HiSS works to promote academic achievement by
        <br></br>
        fostering a supportive environment where students can learn and
        collaborate<br></br>
        together. Club activities include R and Python coding workshops, social
        events,<br></br>
        community service, and participation in the annual Datafest competition.
      </p>
    </div>
  );
};

export default HISS;
