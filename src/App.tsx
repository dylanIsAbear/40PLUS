/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css';
import cx from 'classnames';
import { MenuSvg, Purifier, Softener, Twitter, Upgraded } from './svg';
import { motion, useAnimation } from 'framer-motion';

import { useForm, ValidationError } from '@formspree/react';

import { useInView } from 'react-intersection-observer';
import Imgs from './Imgs';

type Tabs = 'home' | 'services' | 'projects' | 'allprojects' | 'team' | 'contact';

const Menu = (props: { onChangeTab: (tab: Tabs) => void; tab: Tabs; isMobile?: boolean }) => {
  const { onChangeTab, tab } = props;

  const [showMenu, setShowMenu] = useState(true);

  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    if (props.isMobile) {
      setCollapse(true);
    }
  }, [props.isMobile, tab]);

  useEffect(() => {
    if (!props.isMobile) {
      window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
          setShowMenu(false);
        } else if (e.deltaY < 0 && window.scrollY >= 0) {
          setShowMenu(true);
        }
      });
    }
  }, [props.isMobile]);

  if (props.isMobile) {
    return (
      <div className={cx('menu', 'visible')}>
        {!collapse && <div onClick={() => setCollapse(true)} className='gesture-detector' />}
        <img alt='' src='/logo.png' />
        <div className='menu-btn' onClick={() => setCollapse(!collapse)}>
          <MenuSvg />
        </div>
        <div className={cx('menu-dropdown', collapse ? 'dropend' : 'dropstart')}>
          <div
            onClick={() => onChangeTab('home')}
            style={{ marginLeft: 'auto' }}
            className={cx('menu-tab', tab === 'home' ? 'tab-active' : undefined)}
          >
            Home
          </div>
          <div
            onClick={() => onChangeTab('services')}
            className={cx('menu-tab', tab === 'services' ? 'tab-active' : undefined)}
          >
            Services
          </div>
          <div
            onClick={() => onChangeTab('projects')}
            className={cx('menu-tab', tab === 'projects' ? 'tab-active' : undefined)}
          >
            Projects
          </div>
          <div
            onClick={() => onChangeTab('allprojects')}
            className={cx('menu-tab', tab === 'allprojects' ? 'tab-active' : undefined)}
          >
            All Projects
          </div>
          <div
            onClick={() => onChangeTab('team')}
            className={cx('menu-tab', tab === 'team' ? 'tab-active' : undefined)}
          >
            Our Team
          </div>
          <div
            onClick={() => onChangeTab('contact')}
            style={{ marginRight: '10%' }}
            className={cx('menu-tab', tab === 'contact' ? 'tab-active' : undefined)}
          >
            Contact Us
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cx('menu', showMenu ? 'visible' : 'null')}>
      <img alt='' src='/logo.png' />
      <div
        onClick={() => onChangeTab('home')}
        style={{ marginLeft: 'auto' }}
        className={cx('menu-tab', tab === 'home' ? 'tab-active' : undefined)}
      >
        Home
      </div>
      <div
        onClick={() => onChangeTab('services')}
        className={cx('menu-tab', tab === 'services' ? 'tab-active' : undefined)}
      >
        Services
      </div>
      <div
        onClick={() => onChangeTab('projects')}
        className={cx('menu-tab', tab === 'projects' ? 'tab-active' : undefined)}
      >
        Projects
      </div>
      <div
        onClick={() => onChangeTab('allprojects')}
        className={cx('menu-tab', tab === 'allprojects' ? 'tab-active' : undefined)}
      >
        All Projects
      </div>
      <div
        onClick={() => onChangeTab('team')}
        className={cx('menu-tab', tab === 'team' ? 'tab-active' : undefined)}
      >
        Our Team
      </div>
      <div
        onClick={() => onChangeTab('contact')}
        style={{ marginRight: '10%' }}
        className={cx('menu-tab', tab === 'contact' ? 'tab-active' : undefined)}
      >
        Contact Us
      </div>
    </div>
  );
};

const Home = (props: { setTab: (tab: Tabs) => void; isMobile?: boolean }) => {
  const { setTab } = props;
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setTab('home');
    }
  }, [inView]);

  if (props.isMobile) {
    return (
      <div ref={ref} id='home' className='home'>
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            width: '100%',
            height: '100vh',
            position: 'absolute',
            objectFit: 'cover',
            left: 0,
            zIndex: 0,
            top: 0,
          }}
          alt=''
          src='/home.jpg'
        />
        <div className='grayfilter' style={{ width: '100%', height: '100vh' }}></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className='home-main'
        >
          <div className='main-title'>BUILD THE FUTURE OF</div>
          <div className='main-title'>LOS ANGELES</div>
          <div className='main-desc' style={{ marginTop: '15px' }}>
            Welcome to 40plus home improvement
          </div>
          <div className='main-desc'>LA's Premier Residential & Commercial services</div>
          <div
            className='learn-btn'
            onClick={() =>
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
            }
          >
            Learn More
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={ref} id='home' className='home'>
      <motion.img
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          objectFit: 'cover',
          left: 0,
          zIndex: 0,
          top: 0,
        }}
        alt=''
        src='/home.jpg'
      />
      <div className='grayfilter' style={{ width: '100%', height: '100vh' }}></div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className='home-main'
      >
        <div className='main-title'>BUILD THE FUTURE OF</div>
        <div className='main-title'>LOS ANGELES</div>
        <div className='main-desc'>Welcome to 40plus home improvement</div>
        <div className='main-desc'>LA's Premier Residential & Commercial services</div>
        <div
          className='learn-btn'
          onClick={() =>
            document
              .getElementById('about')
              ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
          }
        >
          Learn More
        </div>
      </motion.div>
    </div>
  );
};

const About = (props: { isMobile?: boolean }) => {
  const { isMobile } = props;
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  if (isMobile) {
    return (
      <div id='about' ref={ref} className='about'>
        <motion.div
          initial='hidden'
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            hidden: { opacity: 0, y: -50 },
          }}
          className='about-left'
        >
          <div className='about-title'>ABOUT 40PLUS</div>
          <div className='about-desc'>
            Welcome to 40plus home improvement group. LA's Premier Residential & Commercial
            services.
          </div>
          <div className='about-desc'>
            40plus home improvement group is one of LA's most popular premium general building
            contractors and HVAC systems contractors.
          </div>
          <div className='about-desc'>
            Clients trust our expertise in residential and commercial construction,renovation
            ,installation and other projects repair services .
          </div>
          <div className='about-desc'>
            40plus home improvement performs quality work on a tight budget and works tirelessly to
            hit deadlines every time.
          </div>
        </motion.div>
        <motion.div
          initial='hidden'
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.5 },
            },
            hidden: { opacity: 0, y: -50 },
          }}
          className='about-right'
        >
          <img style={{ width: '100%', borderRadius: '8px' }} alt='' src='/office.jpg' />
          <div className='about-bg-desc'>
            LOS ANGELES <br /> BUILDERS
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div id='about' ref={ref} className='about'>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          hidden: { opacity: 0, y: -50 },
        }}
        className='about-left'
      >
        <div className='about-title'>ABOUT 40PLUS</div>
        <div className='about-desc'>
          Welcome to 40plus home improvement group. LA's Premier Residential & Commercial services.
        </div>
        <div className='about-desc'>
          40plus home improvement group is one of LA's most popular premium general building
          contractors and HVAC systems contractors.
        </div>
        <div className='about-desc'>
          Clients trust our expertise in residential and commercial construction,renovation
          ,installation and other projects repair services .
        </div>
        <div className='about-desc'>
          40plus home improvement performs quality work on a tight budget and works tirelessly to
          hit deadlines every time.
        </div>
      </motion.div>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className='about-right'
      >
        <img style={{ width: '100%', borderRadius: '8px' }} alt='' src='/office.jpg
        ' />
        <div className='about-bg-desc'>
          LOS ANGELES <br /> BUILDERS
        </div>
      </motion.div>
    </div>
  );
};

const Services = (props: { setTab: (tab: Tabs) => void; isMobile?: boolean }) => {
  const { setTab, isMobile } = props;
  const services = [
    'Roofing',
    'HVAC (heating. Ventilation & Air Conditioning)',
    'Remodeling & Structural',
    'Plumbing / Electrical',
    'Mold Remediation& Air Testing',
    'ADU(Accessory dwelling units)',
    'Commercial Tenant Improvements',
    'Home Inspection',
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setTab('services');
    }
  }, [controls, inView]);

  return (
    <div id='services' ref={ref} className='services'>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className='service-title'
      >
        OUR SERVICES
      </motion.div>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className='flex-3'
        style={{ marginTop: '20px' }}
      >
        {services.slice(0, 3).map((val, i) => {
          return (
            <div className='service-item' key={i}>
              <div className='service-name'>{i + 1}</div>
              <div className='service-desc'>{val}</div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className='flex-3'
        style={{ marginTop: '20px' }}
      >
        {services.slice(3, 6).map((val, i) => {
          return (
            <div className='service-item' key={i}>
              <div className='service-name'>{i + 4}</div>
              <div className='service-desc'>{val}</div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.5 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className='flex-3'
        style={{ marginTop: '20px' }}
      >
        <div style={{ marginLeft: '7.5%' }} className='service-item'>
          <div className='service-name'>{7}</div>
          <div className='service-desc'>
            {'HVAC maintenance (heating,ventilation and air conditioning)'}
          </div>
        </div>
        <div style={{ marginRight: '7.5%' }} className='service-item'>
          <div className='service-name'>{8}</div>
          <div className='service-desc'>{'Home Inspection'}</div>
        </div>
      </motion.div>
      <div className='services-bg' />
    </div>
  );
};

const Provide = (props: { isMobile?: boolean }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { isMobile } = props;

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className='services' ref={ref}>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className='service-title'
      >
        WE PROVIDE
      </motion.div>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className='flex-3'
        style={{ marginTop: '20px' }}
      >
        <div style={{ width: isMobile ? '25%' : '20%' }} className='service-item'>
          <Softener width='32px' height='32px' />
          <div style={{ marginTop: '15px' }} className='service-desc'>
            Water Softener system
          </div>
        </div>
        <div style={{ width: isMobile ? '25%' : '20%' }} className='service-item'>
          <Purifier width='32px' height='32px' />
          <div style={{ marginTop: '15px' }} className='service-desc'>
            Water Purifier system
          </div>
        </div>
        <div style={{ width: isMobile ? '25%' : '20%' }} className='service-item'>
          <Upgraded width='32px' height='32px' />
          <div style={{ marginTop: '15px' }} className='service-desc'>
            Kitchen Cabinets Upgraded
          </div>
        </div>
      </motion.div>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className='fake-btn'
      >
        LA's most popular premium Manufacturer
      </motion.div>
      <div className='services-bg' style={{ background: '#ffffffee' }} />
    </div>
  );
};

const Team = (props: { setTab: (tab: Tabs) => void; isMobile?: boolean }) => {
  const { setTab, isMobile } = props;

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setTab('team');
      controls.start('visible');
    }
  }, [inView]);
  const [index, setIndex] = useState(2);
  const [members, setMembers] = useState([
    {
      // url: "https://static.cytelab.net/userpublic/64397e38edfde0aacb43c384/preset-cover-10672c7c-dde5-45da-beef-0c971b89d7cd-1705569722185",
      url: 'http://img.40plushome.com/Ken%20Tan.jpg',
      name: 'Ken Tan',
      role: 'Project Manager',
      desc: 'Ken is an experienced professional contractor, he is working on remodeling , renovation, home improvements and ADU, like plumbing, electrical, roofing, drywall, painting, wood flooring,kitchen cabinets, carpentry and structural work.',
    },
    {
      name: 'Bob Yao',
      // url: "https://static.cytelab.net/userpublic/650154a8f54b94e587232eb8/preset-cover-653f76225fad7442a36d7ca7",
      url: 'http://img.40plushome.com/Bob%20Yao.jpg',
      role: 'Head of construction',
      desc: 'Bob has 10+ years of operations and management experience, where he has directly managed an extensive variety of construction projects, hiring and negotiating with designers, architects, engineers, subcontractors and vendors.He is working on HVAC unit systems , plumbing, electrical, roofing and other maintenance projects.',
    },
    {
      // url: "https://static.cytelab.net/userpublic/650154a8f54b94e587232eb8/preset-cover-656980faf18a16d57605c508-1701414188808",
      url: 'http://img.40plushome.com/Cindy%20Sun.jpg',
      name: 'Cindy Sun',
      role: 'Founder and CEO',
      desc: 'As CEO, Cindy is a responsible for managing the strategies, direction and operations at 40Plus Home Improvement Group. Cindy is a licensed B General Contractor in California, as well as in additional states. Cindy started her career in elevator industry, with a focus on the remodeling , and construction industry . She also is a licensed C-20 Heating, Ventilation, and Air Conditioning contractor in California. She has Certificate of Mold Remediation and Certificate of Home Inspection. Over the past 6 years, Cindy has personally hired and trained over 50 employees, has accumulated expertise in general construction, renovation and development, and has personally overseen completion on over 500+ projects .',
    },
    {
      // url: "https://static.cytelab.net/userpublic/650154a8f54b94e587232eb8/preset-cover-65a9f107e466989194a688df-1705636103798",
      url: 'http://img.40plushome.com/Hale%20Li.jpg',
      name: 'Brown Li',
      role: 'Director of Project Management',
      desc: 'Brown has been working on roof construction at a very large scale for 8+ years. He has personally overseen and managed many construction projects, he oversees all cost control, budget and project management. Many in Brown’s network have praised his ability to execute and solve complex problems. he is working on remodeling , renovation, home improvements, like roofing, plumbing, electrical, roofing, concrete, kitchen cabinets, carpentry and structural work.',
    },
  ]);

  if (isMobile) {
    return (
      <div className='mobileteam'>
        <div className='service-title'>OUR TEAM</div>
        {[2,1,3,0].map((i) => {
          const member = members[i];
          return (
            <div className='m-member'>
              <img alt='' src={member.url} />
              <div className='member-panel'>
                <div className='member-name'>{member.name}</div>
                <div className='member-role'>{member.role}</div>
                <div className='member-desc'>{member.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={ref} id='team' className='team'>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className='service-title'
      >
        OUR TEAM
      </motion.div>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className='magic-panel'
      >
        <div
          className={cx('member', 'member1')}
          // onMouseLeave={() => {
          //   setMembers([members[2], members[1], members[0], members[3]]);
          // }}
          onMouseEnter={() => {
            setIndex(0);
          }}
          onMouseLeave={() => {
            setIndex(2);
          }}
        >
          <img style={{ width: '100%', height: '100%' }} alt='' src={members[0].url} />
        </div>
        <div
          // onMouseLeave={() => {
          //   setMembers([members[0], members[2], members[1], members[3]]);
          // }}
          onMouseEnter={() => {
            setIndex(1);
          }}
          onMouseLeave={() => {
            setIndex(2);
          }}
          className={cx('member', 'member2')}
        >
          <img style={{ width: '100%', height: '100%' }} alt='' src={members[1].url} />
        </div>
        <div
          onMouseEnter={() => {
            setIndex(2);
          }}
          className={cx('member', 'member3')}
        >
          <img style={{ width: '100%', height: '100%' }} alt='' src={members[2].url} />
        </div>
        <div
          // onMouseLeave={() => {
          //   setMembers([members[0], members[1], members[3], members[2]]);
          // }}
          onMouseEnter={() => {
            setIndex(3);
          }}
          onMouseLeave={() => {
            setIndex(2);
          }}
          className={cx('member', 'member4')}
        >
          <img style={{ width: '100%', height: '100%' }} alt='' src={members[3].url} />
        </div>
        <div className='member-panel'>
          <div className='member-name'>{members[index].name}</div>
          <div className='member-role'>{members[index].role}</div>
          <div className='member-desc'>{members[index].desc}</div>
        </div>
      </motion.div>
    </div>
  );
};

const Contact = (props: { setTab: (tab: Tabs) => void; isMobile?: boolean }) => {
  const { setTab, isMobile } = props;

  const [state, handleSubmit] = useForm('xbjngonz');

  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      setTab('contact');
    }
  }, [inView]);

  if (isMobile) {
    return (
      <div ref={ref} id='contact' className='contact'>
        <div className='service-title'>CONTACT US</div>
        <div className='contact-part'>
          <div className='contact-title'>40Plus Home Improvement</div>
          <div className='contact-desc'>
            40plus home improvement group is an experienced Los Angeles based general building
            contractor and HVAC systems contractor, and has extensive resources to ensure projects
            are delivered on time and within budget expectations.
          </div>
          <div className='contact-desc'>
            Our team of seasoned professionals has a proven track executing on functional
            residential and mixed-use construction retrofitting, and we are confident we can bring
            tremendous value to your project. <br />
            <br />
            We are thrilled to be considered.
          </div>
        </div>
        <div className='contact-part'>
          <div className='contact-title'>Contact Details</div>
          <div className='contact-detail'>Phone: 626-525-1861</div>
          <div className='contact-detail'>Email adress: 40plushomeimprovement@gmail.com</div>
          <div className='contact-detail'>Address: Los Angeles, California</div>
          <div className='contact-detail'>Lisence Number: 1059175</div>
        </div>
        <div className='contact-title' style={{ marginTop: '20px' }}>
          Contact Form
        </div>
        <form onSubmit={handleSubmit}>
          <div className='inputrow'>
            <input className='contact-input' name='first-name' placeholder='First Name' />
          </div>
          <div className='inputrow'>
            <input className='contact-input' name='last-name' placeholder='Last Name' />
          </div>
          <div className='inputrow'>
            <input
              id='email'
              type='email'
              name='email'
              className='contact-input'
              placeholder='Email Address'
            />
            <ValidationError prefix='email' field='email' errors={state.errors} />
          </div>
          <div className='inputrow'>
            <input className='contact-input' name='subject' placeholder='Subject' />
          </div>
          <div className='inputrow'>
            <textarea
              id='message'
              name='message'
              style={{
                height: '100px',
              }}
              className='contact-input'
              placeholder='Message'
            />
          </div>
          <button type='submit' className='submit'>
            SUBMIT
          </button>
        </form>
        {state.succeeded && <p>Thanks for contacting us!!</p>}
        {state.errors && <p style={{ color: 'red' }}>Please input email address</p>}
      </div>
    );
  }

  return (
    <div ref={ref} id='contact' className='contact'>
      <div className='service-title'>CONTACT US</div>
      <div className='contact-row'>
        <div className='contact-part'>
          <div className='contact-title'>40Plus Home Improvement</div>
          <div className='contact-desc'>
            40plus home improvement group is an experienced Los Angeles based general building
            contractor and HVAC systems contractor, and has extensive resources to ensure projects
            are delivered on time and within budget expectations.
          </div>
          <div className='contact-desc'>
            Our team of seasoned professionals has a proven track executing on functional
            residential and mixed-use construction retrofitting, and we are confident we can bring
            tremendous value to your project. <br />
            <br />
            We are thrilled to be considered.
          </div>
        </div>
        <div className='spacer' />
        <div className='contact-part'>
          <div className='contact-title'>Contact Details</div>
          <div className='contact-detail'>Phone: 626-525-1861</div>
          <div className='contact-detail'>Email adress: 40plushomeimprovement@gmail.com</div>
          <div className='contact-detail'>Address: Los Angeles, California</div>
          <div className='contact-detail'>Lisence Number: 1059175</div>
        </div>
      </div>
      <div className='contact-title' style={{ marginTop: '40px' }}>
        Contact Form
      </div>
      <form onSubmit={handleSubmit}>
        <div className='inputrow'>
          <input className='contact-input' name='first-name' placeholder='First Name' />
        </div>
        <div className='inputrow'>
          <input className='contact-input' name='last-name' placeholder='Last Name' />{' '}
        </div>
        <div className='inputrow'>
          <input
            id='email'
            type='email'
            name='email'
            className='contact-input'
            placeholder='Email Address'
          />
          <ValidationError prefix='email' field='email' errors={state.errors} />
        </div>
        <div className='inputrow'>
          <input className='contact-input' name='subject' placeholder='Subject' />
        </div>
        <div className='inputrow'>
          <textarea
            id='message'
            name='message'
            style={{
              height: '100px',
            }}
            className='contact-input'
            placeholder='Message'
          />
        </div>
        <button style={{ marginLeft: '130px' }} type='submit' className='submit'>
          {state.submitting ? 'sending...' : 'SUBMIT'}
        </button>
      </form>
      {state.succeeded && <p>Thanks for contacting us!!</p>}
      {state.errors && <p style={{ color: 'red' }}>Please input email address</p>}
    </div>
  );
};

const ImgsF = [
  {
    name: 'Asphalt shingles at Monterey Park city reroofing',
    src: 'http://img.40plushome.com/projects/Asphalt%20shingles%20at%20Monterey%20Park%20city%20reroofing/1.png',
  },
  {
    name: 'Asphalt shingles reroofing at Rowland Heights',
    src: 'http://img.40plushome.com/projects/Asphalt%20shingles%20reroofing%20at%20Rowland%20Heights/1.png',
  },
  {
    name: 'Goodman HVAC units at San Gabriel city instillation',
    src: 'http://img.40plushome.com/projects/Goodman%20HVAC%20units%20at%20San%20Gabriel%20city%20instillation/afeee23526bf16c3dc7cf36d35689c5.png',
  },
  {
    name: 'HVAC',
    src: 'http://img.40plushome.com/projects/HVAC/1.png',
  },
  {
    name: 'HVAC at Garden Grove city Replacement',
    src: 'http://img.40plushome.com/projects/HVAC%20at%20Garden%20Grove%20city%20Replacement/1.png',
  },
  {
    name: 'HVAC units at Garden Grove city troubleshooting',
    src: 'http://img.40plushome.com/projects/HVAC%20units%20at%20Garden%20Grove%20city%20troubleshooting/8b2b0513192bb55126e87af4485da6d.png',
  },
  {
    name: 'House ADU',
    src: 'http://img.40plushome.com/projects/House%20ADU/1.png',
  },
  {
    name: 'Kitchen Remodeling',
    src: 'http://img.40plushome.com/projects/Kitchen%20Remodeling/1.png',
  },
  {
    name: 'Midea HVAC units at Chino Hills city installation',
    src: 'http://img.40plushome.com/projects/Midea%20HVAC%20units%20at%20Chino%20Hills%20city%20installation/1.png',
  },
];

const ImgsR = [
  {
    name: 'Mold Remediation at Newport Coast city service',
    src: 'http://img.40plushome.com/projects/Mold%20Remediation%20at%20Newport%20Coast%20city%20service/1.png',
  },
  {
    name: 'Roofing project',
    src: 'http://img.40plushome.com/projects/Roofing%20project/1.png',
  },
  {
    name: 'Water softener system projects',
    src: 'http://img.40plushome.com/projects/Water%20softener%20system%20projects/1.png',
  },
  {
    name: 'asphalt shingles reroofing at West Covina city',
    src: 'http://img.40plushome.com/projects/asphalt%20shingles%20reroofing%20at%20West%20Covina%20city/9fd26ba6bf0d2a87e7a7fa80fb5c633.png',
  },
  {
    name: 'commercial history building projects',
    src: 'http://img.40plushome.com/projects/commercial%20history%20building%20projects/0.1.png',
  },
  {
    name: 'residential roofing tiles at Azusa city installation',
    src: 'http://img.40plushome.com/projects/residential%20roofing%20tiles%20at%20Azusa%20city%20%C2%A0installation/1.png',
  },
  {
    name: 'roof',
    src: 'http://img.40plushome.com/projects/roof/1.png',
  },
  {
    name: 'roofing project 2',
    src: 'http://img.40plushome.com/projects/roofing%20project%202/1280a895922df4abf80eb87307c1761.png',
  },
];

const Project = (props: { setTab: (tab: Tabs) => void; isMobile?: boolean }) => {
  const { setTab } = props;
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { isMobile } = props;
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setTab('projects');
    }
  }, [controls, inView]);

  if (isMobile) {
    return (
      <div ref={ref} id='projects' className={cx('services', 'projects')}>
        <motion.div
          initial='hidden'
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            },
            hidden: { opacity: 0, y: -50 },
          }}
          className='service-title'
        >
          OUR PROJECTS
        </motion.div>
        <motion.div
          initial='hidden'
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5 },
            },
            hidden: { opacity: 0, y: -50 },
          }}
          className='project-row'
        >
          <div className='projects-split'>
            <Imgs noHover={isMobile} imgsrc={ImgsF} />
            <Imgs noHover={isMobile} imgsrc={ImgsR} backward />
          </div>
        </motion.div>
        <motion.div
          initial='hidden'
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 1 },
            },
            hidden: { opacity: 0, y: -50 },
          }}
          className='seeall'
          onClick={() => setTab('allprojects')}
        >
          SEE ALL PROJECTS
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={ref} id='projects' className='services'>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className='service-title'
      >
        OUR PROJECTS
      </motion.div>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className='project-row'
      >
        <div className='projects-split'>
          <Imgs noHover={isMobile} imgsrc={ImgsF} />
          <Imgs noHover={isMobile} imgsrc={ImgsR} backward />
        </div>
      </motion.div>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className='seeall'
        onClick={() => setTab('allprojects')}
      >
        SEE ALL PROJECTS
      </motion.div>
    </div>
  );
};

const AllProjects = (props: { isMobile?: boolean }) => {
  const { isMobile } = props;

  const imgs = [
    {
      name: 'Asphalt Shingles at Monterey Park City Reroofing',
      links: [
        'http://img.40plushome.com/projects/Asphalt%20shingles%20at%20Monterey%20Park%20city%20reroofing/1.png',
        'http://img.40plushome.com/projects/Asphalt%20shingles%20at%20Monterey%20Park%20city%20reroofing/2.png',
      ],
    },
    {
      name: 'Asphalt shingles Reroofing at Rowland Heights',
      links: [
        'http://img.40plushome.com/projects/Asphalt%20shingles%20reroofing%20at%20Rowland%20Heights/1.png',
        'http://img.40plushome.com/projects/Asphalt%20shingles%20reroofing%20at%20Rowland%20Heights/2.png',
        'http://img.40plushome.com/projects/Asphalt%20shingles%20reroofing%20at%20Rowland%20Heights/3.png',
        // 'http://img.40plushome.com/projects/Asphalt%20shingles%20reroofing%20at%20Rowland%20Heights/4.png'
      ],
    },
    {
      name: 'Goodman HVAC Units at San Gabriel City Instillation',
      links: [
        'http://img.40plushome.com/projects/Goodman%20HVAC%20units%20at%20San%20Gabriel%20city%20instillation/afeee23526bf16c3dc7cf36d35689c5.png',
      ],
    },
    {
      name: 'HVAC',
      links: [
        'http://img.40plushome.com/projects/HVAC/1.png',
        'http://img.40plushome.com/projects/HVAC/2.png',
        'http://img.40plushome.com/projects/HVAC/3.png',
      ],
    },
    {
      name: 'HVAC at Garden Grove City Replacement',
      links: [
        'http://img.40plushome.com/projects/HVAC%20at%20Garden%20Grove%20city%20Replacement/1.png',
        'http://img.40plushome.com/projects/HVAC%20at%20Garden%20Grove%20city%20Replacement/2.png',
      ],
    },
    {
      name: 'HVAC Units at Garden Grove City Troubleshooting',
      links: [
        'http://img.40plushome.com/projects/HVAC%20units%20at%20Garden%20Grove%20city%20troubleshooting/8b2b0513192bb55126e87af4485da6d.png',
      ],
    },
    {
      name: 'House ADU',
      links: [
        'http://img.40plushome.com/projects/House%20ADU/1.png',
        'http://img.40plushome.com/projects/House%20ADU/2.png',
        'http://img.40plushome.com/projects/House%20ADU/3.png',
      ],
    },
    {
      name: 'Kitchen Remodeling',
      links: [
        'http://img.40plushome.com/projects/Kitchen%20Remodeling/1.png',
        'http://img.40plushome.com/projects/Kitchen%20Remodeling/2.png',
        'http://img.40plushome.com/projects/Kitchen%20Remodeling/3.png',
      ],
    },
    {
      name: 'Midea HVAC Units at Chino Hills City Installation',
      links: [
        'http://img.40plushome.com/projects/Midea%20HVAC%20units%20at%20Chino%20Hills%20city%20installation/1.png',
        'http://img.40plushome.com/projects/Midea%20HVAC%20units%20at%20Chino%20Hills%20city%20installation/2.png',
        'http://img.40plushome.com/projects/Midea%20HVAC%20units%20at%20Chino%20Hills%20city%20installation/3.png',
      ],
    },
    {
      name: 'Mold Remediation at Newport Coast City Service',
      links: [
        'http://img.40plushome.com/projects/Mold%20Remediation%20at%20Newport%20Coast%20city%20service/1.png',
        'http://img.40plushome.com/projects/Mold%20Remediation%20at%20Newport%20Coast%20city%20service/2.png',
        'http://img.40plushome.com/projects/Mold%20Remediation%20at%20Newport%20Coast%20city%20service/3.png',
      ],
    },
    {
      name: 'Roofing Project',
      links: [
        'http://img.40plushome.com/projects/Roofing%20project/1.png',
        'http://img.40plushome.com/projects/Roofing%20project/2.png',
      ],
    },
    {
      name: 'Water Softener System Projects',
      links: [
        'http://img.40plushome.com/projects/Water%20softener%20system%20projects/1.png',
        'http://img.40plushome.com/projects/Water%20softener%20system%20projects/2.png',
      ],
    },
    {
      name: 'Asphalt Shingles Reroofing at West Covina City',
      links: [
        'http://img.40plushome.com/projects/asphalt%20shingles%20reroofing%20at%20West%20Covina%20city/9fd26ba6bf0d2a87e7a7fa80fb5c633.png',
      ],
    },
    {
      name: 'Commercial History Building Projects',
      links: [
        'http://img.40plushome.com/projects/commercial%20history%20building%20projects/1.png',
        'http://img.40plushome.com/projects/commercial%20history%20building%20projects/2.png',
        'http://img.40plushome.com/projects/commercial%20history%20building%20projects/3.png',
      ],
    },
    {
      name: 'Residential Roofing Tiles at Azusa City Installation',
      links: [
        'http://img.40plushome.com/projects/residential%20roofing%20tiles%20at%20Azusa%20city%20%C2%A0installation/1.png',
        'http://img.40plushome.com/projects/residential%20roofing%20tiles%20at%20Azusa%20city%20%C2%A0installation/2.png',
      ],
    },
    {
      name: 'Roof',
      links: [
        'http://img.40plushome.com/projects/roof/1.png',
        'http://img.40plushome.com/projects/roof/2.png',
        'http://img.40plushome.com/projects/roof/3.png',
      ],
    },
    {
      name: 'Roofing Project 2',
      links: [
        'http://img.40plushome.com/projects/roofing%20project%202/1280a895922df4abf80eb87307c1761.png',
        'http://img.40plushome.com/projects/roofing%20project%202/f0d52230c7f319421ec645f76e408a5.png',
      ],
    },
  ];

  return (
    <div className='allprojects'>
      <div style={{ height: isMobile ? '80px' : '200px', width: '100%', background: 'white' }} />
      {imgs.map((project, i) => {
        return (
          <div className='apblock' key={i}>
            <div className='aptitle'>{project.name}</div>
            <div className='flex-3' style={{ gap: '5px' }}>
              {project.links.map((link) => (
                <img alt='' src={link} key={link}></img>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Footer = (props: { isMobile: boolean }) => {
  return (
    <div className='footer'>
      <div className='ft'>Copyright@ 40 Plus Company, LLC, 2024</div>
      <div className='icon-row'>
        <Twitter size={props.isMobile ? '16px' : undefined} />
        <img alt='' src='/ins.png' />
        <img alt='' src='/facebook.png' />
      </div>
    </div>
  );
};

function isMobileUserAgent() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isMobileScreenWidth() {
  return window.innerWidth <= 768;
}

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

function isMobileDevice() {
  return isMobileUserAgent() || isMobileScreenWidth() || isTouchDevice();
}

function App() {
  const [tab, setTab] = useState<Tabs>('home');

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    setIsMobile(Boolean(isMobileDevice()));
  }, []);

  return (
    <div className='App'>
      <Menu
        onChangeTab={(tab) => {
          setTab(tab);
          document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }}
        isMobile={isMobile}
        tab={tab}
      />
      {tab === 'allprojects' && <AllProjects isMobile={isMobile} />}
      {tab !== 'allprojects' && (
        <>
          <Home isMobile={isMobile} setTab={setTab} />
          <div style={{ height: '20px' }} />
          <About isMobile={isMobile} />

          <div style={{ height: '20px' }} />
          <Services isMobile={isMobile} setTab={setTab} />

          <div style={{ height: '20px' }} />
          <Provide isMobile={isMobile} />

          <div style={{ height: '20px' }} />
          <Project isMobile={isMobile} setTab={setTab} />

          <div style={{ height: '20px' }} />
          <Team isMobile={isMobile} setTab={setTab} />

          <div style={{ height: '20px' }} />
          <Contact isMobile={isMobile} setTab={setTab} />
        </>
      )}
      {tab !== 'allprojects' && <div style={{ height: '20px' }} />}
      <Footer isMobile={isMobile} />
    </div>
  );
}

export default App;
