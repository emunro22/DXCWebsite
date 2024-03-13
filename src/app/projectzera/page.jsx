import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const ProjectZera = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>Project Zera</h1>
            <p className={styles.desc}>
              It’s been just over two weeks since the official Project Zera
              launch and we wanted to take this opportunity to call out some key
              highlights. Alongside the below all the phase one workstreams are
              in flight so there is lots to keep you all updated on, therefore
              we will be sharing these communications on a regular basis.
            </p>
            <div className={styles.author}>
              <Image
                src="/dxcprofile.jpg"
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>Amy Mulford</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/zeraproject.jpg"
              alt=""
              width={600} // Adjust the width as per your requirements
              height={400} // Adjust the height as per your requirements
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Highlights <br></br>
            <br></br> DXC Townhalls – on- site “events” A pilot on-site event
            was held to share the latest DXC Public Sector Townhall. We surveyed
            those who attended and their feedback showed that. 87% of them said
            that having an on-site event improved the overall experience of the
            townhall, that attending was a good use of their time and that the
            townhall covered topics relevant to their role. Watch this space for
            further DXC Townhall events coming soon.<br></br>
            <br></br> Clearance of legacy kit <br></br>
            <br></br> As a hot topic for many of you this workstream has been a
            key focus for the team. The facility capacity level is 119% leaving
            us unable to maneuverer stock and secure stock appropriately.
            Actions are underway with kit owners and the legacy stock currently
            within the warehouse will all be out the door by the end of this
            month. That will take our warehouse capacity to 87%. This is bang on
            target (capacity level should be at 85-90% within the warehouse).
            The next area to tackle is to clear legacy stock being stored
            outside of the warehouse in other on-site rooms. The aim is that no
            kit should be stored long term within these rooms, i.e. we are
            operating by just holding stock in these spaces that we need to run
            our day to day delivery. The target is to get the legacy kit stored
            outside of the warehouse down to zero.
            <br></br>
            <br></br>Operational Success <br></br>
            <br></br>All our Accounts are trending green! This is a massive
            success – we are delivering for our customers. We still have work to
            continually improve our services to maintain a steady state but a
            green status allows us time to focus on the tasks ahead by getting
            us out of a reactive and firefighting state and into focusing on
            proactive long term solutions. <br></br>
            <br></br>Volunteers <br></br>
            <br></br>After our request for volunteers to support Project Zera we
            are pleased to welcome: Lynda Mills, Jay O’Connor, Tracey Ann
            Horrocks, Andrew Pearson, Mary Waddell, Billie Jo Horrocks, Martin
            Jenkins and Richard Allison to the project team. The volunteers will
            be helping to deliver some of the workstreams alongside providing
            their feedback on the changes Project Zera brings to help us shape
            and steer the programme. <br></br>
            <br></br>It’s not too late to volunteer, if you wish to get involved
            or have any questions, then do please reach out to Amy Mulford,
            Gemma Reppke, Steph Shaw or Greg Morrison. <br></br>
            <br></br>Coming Soon<br></br>
            <br></br> Personal impact to Client – on-site “events” We will be
            holding events with guest speakers from our DXC Account Teams with
            all employees to talk about the personal impact each and every one
            of you have on our Clients and what they deliver. The sessions will
            be held after the easter period so watch this space for invites
            coming soon. <br></br>
            <br></br>Many thanks The Project Zera Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectZera;
