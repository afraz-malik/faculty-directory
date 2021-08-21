import React from 'react'
import BoxmodelCss from './Boxmodel.module.css'
// Components
import RecordGen from './RecordGen'
// import { Spinner } from '../spinner/spinner'

const Boxmodel = ({ toggleForm }) => {
  const initialUserState = {
    users: [
      {
        fm_id: '134471741',
        fm_name: 'Dr. Adam Zaman Chaudhry',
        fm_address: 'house no 16, street no 01,tajpura. Lahore',
        fm_designation: 'Assistant Professor in LUMS',
        fm_salary: '130000',
        qualification: [
          {
            q_id: '45',
            fm_id: '134471741',
            degree_tittle: 'PhD in Physics',
            year_of_passing: '2013',
            institute_attended: 'National University of Singapore (NUS)',
          },
          {
            q_id: '46',
            fm_id: '134471741',
            degree_tittle: 'M.Phil in Physics',
            year_of_passing: '2015',
            institute_attended: 'National University of Singapore (NUS)',
          },
        ],
      },
      {
        fm_id: '208902600',
        fm_name: 'Dr. Zehra Waheed',
        fm_address: 'house no 16, street no 01,North Karachi',
        fm_designation: 'Assistant Professor in LUMS',
        fm_salary: '134000',
        qualification: [
          {
            q_id: '36',
            fm_id: '208902600',
            degree_tittle: ' PhD., Facilities Management',
            year_of_passing: '1994',
            institute_attended: 'Heriot-Watt University, Scotland',
          },
          {
            q_id: '37',
            fm_id: '208902600',
            degree_tittle: 'MSc., Construction Project Management',
            year_of_passing: '2000',
            institute_attended: 'Heriot-Watt University, Scotland',
          },
          {
            q_id: '38',
            fm_id: '208902600',
            degree_tittle: 'MBA (Finance)',
            year_of_passing: '2002',
            institute_attended:
              'Institute of Business Administration (IBA-Karachi), Pakistan',
          },
        ],
      },
      {
        fm_id: '240561310',
        fm_name: 'Ammar Hasan',
        fm_address: 'Flat no 15,Rukshanda heights,Lahore',
        fm_designation: 'HOD POWER & CONTROL ENGINEERING IN NUST',
        fm_salary: '250000',
        qualification: [
          {
            q_id: '47',
            fm_id: '240561310',
            degree_tittle: 'Bachelors in Electrical Engineering',
            year_of_passing: '2004',
            institute_attended:
              'National University of Sciences and Technology',
          },
          {
            q_id: '48',
            fm_id: '240561310',
            degree_tittle: 'MS in Electrical Engineering',
            year_of_passing: '2008',
            institute_attended: 'Imperial College London',
          },
          {
            q_id: '49',
            fm_id: '240561310',
            degree_tittle: 'PhD in Electrical Engineering',
            year_of_passing: '2012',
            institute_attended: 'Imperial College London',
          },
        ],
      },
      {
        fm_id: '253548374',
        fm_name: 'Afraz Malik',
        fm_address: '2/8 Malik Park, Amir Rd,Shad Bagh',
        fm_designation: 'Junior Programmar',
        fm_salary: '10000',
        qualification: [
          {
            q_id: '7',
            fm_id: '253548374',
            degree_tittle: 'Matriculation',
            year_of_passing: '2015',
            institute_attended: 'Jinnah Grammar School',
          },
          {
            q_id: '8',
            fm_id: '253548374',
            degree_tittle: 'ICS',
            year_of_passing: '2017',
            institute_attended: 'Punjab Group of Colleges',
          },
          {
            q_id: '9',
            fm_id: '253548374',
            degree_tittle: 'BSCS',
            year_of_passing: '2022',
            institute_attended: 'Virtual University Of Pakistan',
          },
        ],
      },
      {
        fm_id: '254920144',
        fm_name: 'Dr. Abdul Wahid',
        fm_address: 'house no 16, street no 01,Peshawar',
        fm_designation: 'HOD NUST INSTITUTE OF INFORMATION TECHNOLOGY',
        fm_salary: '190000',
        qualification: [
          {
            q_id: '50',
            fm_id: '254920144',
            degree_tittle: ' BSc ((Communications))',
            year_of_passing: '2006',
            institute_attended:
              'University of Engineering and Technology Lahore',
          },
          {
            q_id: '51',
            fm_id: '254920144',
            degree_tittle: 'MS (CS)',
            year_of_passing: '2004',
            institute_attended: 'The University of Agriculture, Peshawar',
          },
          {
            q_id: '52',
            fm_id: '254920144',
            degree_tittle: 'Ph.D. in Computer Science & Engineering',
            year_of_passing: '2013',
            institute_attended: 'Kyungpook National University',
          },
        ],
      },
      {
        fm_id: '317624049',
        fm_name: 'Dr. Zubair Abbasi',
        fm_address: 'house no 16, street no 01,wasanpura. Lahore',
        fm_designation:
          'Associate Professor at the Shaikh Ahmad Hassan School of Law, Lahore University of Management Sciences (LUMS)',
        fm_salary: '100000',
        qualification: [
          {
            q_id: '18',
            fm_id: '317624049',
            degree_tittle: 'DPhil in Law',
            year_of_passing: '1995',
            institute_attended: 'Oxford University',
          },
          {
            q_id: '19',
            fm_id: '317624049',
            degree_tittle: 'Judicial Islamization of  Laws',
            year_of_passing: '2001',
            institute_attended: 'Punjab Universty',
          },
        ],
      },
      {
        fm_id: '391729100',
        fm_name: 'Ms. Naila Noureen',
        fm_address: 'House no 21,near taj marquee . golbagh,Lahore',
        fm_designation: 'research scholar in Cancer Research Centre',
        fm_salary: '150000',
        qualification: [
          {
            q_id: '12',
            fm_id: '391729100',
            degree_tittle: 'PhD scholar',
            year_of_passing: '2011',
            institute_attended: 'Cancer Biology Lab-MMG',
          },
        ],
      },
      {
        fm_id: '631088028',
        fm_name: 'Dr. Saira Zainab',
        fm_address: 'House No 5,Street No 10,Rawalpindi',
        fm_designation: 'ASSOCIATE PROFESSOR IN NUST',
        fm_salary: '375000',
        qualification: [
          {
            q_id: '65',
            fm_id: '631088028',
            degree_tittle: 'Matriculation (Science)',
            year_of_passing: '1995',
            institute_attended:
              'Board of Intermediate and Secondary Education, Rawalpindi',
          },
          {
            q_id: '66',
            fm_id: '631088028',
            degree_tittle: 'Intermediate (Humanities)',
            year_of_passing: '1997',
            institute_attended:
              'Board of Intermediate and Secondary Education, Rawalpindi',
          },
          {
            q_id: '67',
            fm_id: '631088028',
            degree_tittle: ' Bachelor of Science (Mathematics)',
            year_of_passing: '1999',
            institute_attended: 'Associate Ordinary Bachelor',
          },
          {
            q_id: '68',
            fm_id: '631088028',
            degree_tittle: ' Master of Science (Mathematics)',
            year_of_passing: '2008',
            institute_attended: 'COMSATS Institute of Information Technology',
          },
          {
            q_id: '69',
            fm_id: '631088028',
            degree_tittle: 'Doctor of Philosophy (Mathematics)',
            year_of_passing: '2012',
            institute_attended: 'COMSATS Institute of Information Technology',
          },
        ],
      },
      {
        fm_id: '637834780',
        fm_name: 'Dr. Sania Zahra Malik',
        fm_address: 'Hose no 10,Street no 7,Johar town, Lahore',
        fm_designation: 'Director in Punjab Univesrty',
        fm_salary: '500000',
        qualification: [
          {
            q_id: '10',
            fm_id: '637834780',
            degree_tittle: 'PhD in Business Management',
            year_of_passing: '2001',
            institute_attended: 'University of Glasgow, United Kingdom',
          },
          {
            q_id: '11',
            fm_id: '637834780',
            degree_tittle: 'IBA',
            year_of_passing: '1998',
            institute_attended: 'MBA in Finance',
          },
        ],
      },
      {
        fm_id: '695570018',
        fm_name: 'Ms. Hina Munir Butt',
        fm_address: 'Hose no 07,Street No 3, RAWALPINDI',
        fm_designation: 'Assistant Professor in NUST',
        fm_salary: '138000',
        qualification: [
          {
            q_id: '71',
            fm_id: '695570018',
            degree_tittle: 'Bechelor in Science (MATHEMATICS)',
            year_of_passing: '2002',
            institute_attended: 'Azad Jammu and Kashmir University',
          },
          {
            q_id: '72',
            fm_id: '695570018',
            degree_tittle: ' Masters (MATHEMATICS)',
            year_of_passing: '2005',
            institute_attended: 'Quaid-i-Azam University',
          },
          {
            q_id: '73',
            fm_id: '695570018',
            degree_tittle: 'Doctor of Philosophy (DIFFERENTIAL EQUATIONS)',
            year_of_passing: '2016',
            institute_attended:
              'National University of Sciences and Technology',
          },
        ],
      },
      {
        fm_id: '719947204',
        fm_name: 'Dr. Ferhana Ahmad',
        fm_address: 'House no 13,street no 8,Awan town, Lahore',
        fm_designation: 'Assistant Professor in LUMS',
        fm_salary: '200000',
        qualification: [
          {
            q_id: '28',
            fm_id: '719947204',
            degree_tittle: 'DPhil in Mathematics',
            year_of_passing: '2007',
            institute_attended: 'University of Oxford, England',
          },
          {
            q_id: '29',
            fm_id: '719947204',
            degree_tittle: 'MSc in Mathematical and Computational Finance',
            year_of_passing: '2000',
            institute_attended: 'University of Oxford, England',
          },
        ],
      },
      {
        fm_id: '806873855',
        fm_name: 'Khawar Khurshid',
        fm_address: 'House no 20,Street No 9, golbagh,Islamabad',
        fm_designation: 'ASSOCIATE PROFESSOR IN NUST',
        fm_salary: '120000',
        qualification: [
          {
            q_id: '62',
            fm_id: '806873855',
            degree_tittle: 'BE (COMPUTER SYSTEMS ENGINEERING)',
            year_of_passing: '2003',
            institute_attended:
              'National University of Sciences and Technology',
          },
          {
            q_id: '63',
            fm_id: '806873855',
            degree_tittle: 'MS (Electrical Engineering)',
            year_of_passing: '2005',
            institute_attended: 'Michigan State University',
          },
          {
            q_id: '64',
            fm_id: '806873855',
            degree_tittle: 'PhD Electrical Engineering (BIOMEDICAL IMAGING)',
            year_of_passing: '2010',
            institute_attended: 'Michigan State University',
          },
        ],
      },
      {
        fm_id: '937447505',
        fm_name: 'Dr. Arshad Ahmad',
        fm_address: 'House no 13,street no 13, Islamabd',
        fm_designation: 'Molson School of Business',
        fm_salary: '320000',
        qualification: [
          {
            q_id: '14',
            fm_id: '937447505',
            degree_tittle: 'PhD in Psychology',
            year_of_passing: '2000',
            institute_attended: 'McGill University',
          },
          {
            q_id: '15',
            fm_id: '937447505',
            degree_tittle: 'MBA',
            year_of_passing: '2004',
            institute_attended: 'McGill University',
          },
        ],
      },
      {
        fm_id: '971153907',
        fm_name: 'Malik Moin Awan',
        fm_address: 'House no 29,Saba Gali,Taj Bagh Scheme, Lahore',
        fm_designation: 'Custom Clearing Agent',
        fm_salary: '150000',
        qualification: [
          {
            q_id: '1',
            fm_id: '971153907',
            degree_tittle: 'Matriculation',
            year_of_passing: '2016',
            institute_attended: 'LAHORE GRAMER SCHOOL',
          },
          {
            q_id: '3',
            fm_id: '971153907',
            degree_tittle: 'ICS',
            year_of_passing: '2018',
            institute_attended: 'Govt Islamia College,Railway Road Lahore',
          },
          {
            q_id: '4',
            fm_id: '971153907',
            degree_tittle: 'BSCS',
            year_of_passing: '2020',
            institute_attended: 'VIRTUAL UNIVERSTY',
          },
        ],
      },
      {
        fm_id: '1001125667',
        fm_name: 'Dr. Muhammad Usman',
        fm_address: 'House no 13,street no 17 ,faisal town, Lahore',
        fm_designation:
          'Assistant Professor-Tenure Track in the Department of Mathematics - (SBASSE).',
        fm_salary: '174900',
        qualification: [
          {
            q_id: '39',
            fm_id: '1001125667',
            degree_tittle: 'PhD in Mathematics',
            year_of_passing: '2012',
            institute_attended: 'Imperial College London',
          },
          {
            q_id: '40',
            fm_id: '1001125667',
            degree_tittle: 'BSc in Mathematics',
            year_of_passing: '2006',
            institute_attended:
              'Kingâ€™s College London and COMSATS Institute of Information Technology',
          },
          {
            q_id: '41',
            fm_id: '1001125667',
            degree_tittle: ' MSc in Mathematics',
            year_of_passing: '2008',
            institute_attended:
              'Kingâ€™s College London and COMSATS Institute of Information Technology',
          },
        ],
      },
      {
        fm_id: '1081777806',
        fm_name: 'Dr. Nasir Abbas',
        fm_address: 'House no 13,street no 13 ,faisal town, Lahore',
        fm_designation: 'Director General of the Urdu Science Board, Lahore',
        fm_salary: '200000',
        qualification: [
          {
            q_id: '16',
            fm_id: '1081777806',
            degree_tittle: 'Phd in Urdu',
            year_of_passing: '1998',
            institute_attended: 'GC University Lahore',
          },
          {
            q_id: '17',
            fm_id: '1081777806',
            degree_tittle: 'M.phil',
            year_of_passing: '2003',
            institute_attended: 'Punjab Universty',
          },
        ],
      },
      {
        fm_id: '1171782367',
        fm_name: 'Mr. Hassan Emaduddin Ansari',
        fm_address: 'House no 10,street no 3,Faisal town, Lahore',
        fm_designation: 'Assistant Professor in LUMS',
        fm_salary: '130001',
        qualification: [
          {
            q_id: '32',
            fm_id: '1171782367',
            degree_tittle: 'Master of Public Policy (MPP) degrees',
            year_of_passing: '1999',
            institute_attended: 'University of Michigan Law School ',
          },
          {
            q_id: '33',
            fm_id: '1171782367',
            degree_tittle: 'Law and History Fellowship',
            year_of_passing: '2007',
            institute_attended: 'University of Michigan Law School ',
          },
        ],
      },
      {
        fm_id: '1219669718',
        fm_name: 'Dr. Muhammad Farooq Sabar',
        fm_address: 'house no 16, street no 01,wasanpura. Lahore',
        fm_designation: 'CAMB',
        fm_salary: '76000',
        qualification: [
          {
            q_id: '13',
            fm_id: '1219669718',
            degree_tittle: 'MPhil program',
            year_of_passing: '1994',
            institute_attended: 'CAMB',
          },
        ],
      },
      {
        fm_id: '1277282124',
        fm_name: 'Dr. Sadaf Ahmad',
        fm_address: 'House no 11,street no 3,Iqbal town, Lahore',
        fm_designation: 'Associate Professor in LUMS',
        fm_salary: '130000',
        qualification: [
          {
            q_id: '30',
            fm_id: '1277282124',
            degree_tittle: 'PhD in Cultural Anthropology',
            year_of_passing: '2006',
            institute_attended: 'Syracuse University',
          },
          {
            q_id: '31',
            fm_id: '1277282124',
            degree_tittle: 'M.Phil in Cultural Anthropology',
            year_of_passing: '2010',
            institute_attended: 'GC University Lahore',
          },
        ],
      },
      {
        fm_id: '1306904948',
        fm_name: 'Miss. Naumana Ayub',
        fm_address: 'House no 14,street no 3,johar town, Lahore',
        fm_designation: 'Assistant Professor in NUST',
        fm_salary: '240000',
        qualification: [
          {
            q_id: '80',
            fm_id: '1306904948',
            degree_tittle:
              'BE Electrical (Telecommunication) Engineering (Telecommunication)',
            year_of_passing: '2012',
            institute_attended:
              'National University of Sciences and Technology',
          },
          {
            q_id: '81',
            fm_id: '1306904948',
            degree_tittle:
              ' MS in Electrical Engineering (Communication and Networks)',
            year_of_passing: '2014',
            institute_attended:
              'National University of Sciences and Technology',
          },
          {
            q_id: '82',
            fm_id: '1306904948',
            degree_tittle:
              'PhD in Communications Engineering (Wireless Communication)',
            year_of_passing: '2019',
            institute_attended: 'City University of London',
          },
        ],
      },
      {
        fm_id: '1325037498',
        fm_name: 'Dr. Hasan Tahir',
        fm_address: 'House no 09,street no 1 ,faisal town, Lahore',
        fm_designation: 'HOD INTELLIGENT SYSTEM (IS) IN NUST',
        fm_salary: '315000',
        qualification: [
          {
            q_id: '53',
            fm_id: '1325037498',
            degree_tittle: ' Software Engineering ',
            year_of_passing: '2008',
            institute_attended: 'Bahria University',
          },
          {
            q_id: '54',
            fm_id: '1325037498',
            degree_tittle: 'MS Software Engineering',
            year_of_passing: '2011',
            institute_attended:
              'National University of Sciences and Technology',
          },
          {
            q_id: '55',
            fm_id: '1325037498',
            degree_tittle: 'Doctor of Philosophy in Computing and Electronics',
            year_of_passing: '2017',
            institute_attended: 'University of Essex',
          },
        ],
      },
      {
        fm_id: '1328177806',
        fm_name: 'Dr. Ammar Ahmed Khan',
        fm_address: 'House no 21,harbanspura,Lahore',
        fm_designation: 'Associate Professor in LUMS',
        fm_salary: '70000',
        qualification: [
          {
            q_id: '26',
            fm_id: '1328177806',
            degree_tittle: 'PhD',
            year_of_passing: '2004',
            institute_attended: 'University of Cambridge',
          },
          {
            q_id: '27',
            fm_id: '1328177806',
            degree_tittle:
              'Master of Philosophy (M.Phil) degree in the Engineering Department',
            year_of_passing: '2010',
            institute_attended: 'University of Cambridge',
          },
        ],
      },
      {
        fm_id: '1393514544',
        fm_name: 'Prof. Dr Jamshaid Ahmed',
        fm_address: 'House no 16,street no 6,Wapda town, Lahore',
        fm_designation: 'Professor In UCP',
        fm_salary: '160000',
        qualification: [
          {
            q_id: '83',
            fm_id: '1393514544',
            degree_tittle: 'PhD',
            year_of_passing: '2010',
            institute_attended: 'Hamdard University Karachi',
          },
          {
            q_id: '84',
            fm_id: '1393514544',
            degree_tittle:
              'Post Graduate higher education teaching qualification',
            year_of_passing: '2015',
            institute_attended: 'Hamdard University Karachi',
          },
        ],
      },
      {
        fm_id: '1563671690',
        fm_name: 'Dr. Arif Nazir Butt',
        fm_address: 'House no 09,street no 6,johar town, Lahore',
        fm_designation:
          'Professor at the Suleman Dawood School of Business at the Lahore University of Management Sciences, Lahore, Pakistan',
        fm_salary: '99000',
        qualification: [
          {
            q_id: '34',
            fm_id: '1563671690',
            degree_tittle: 'Phd in Human Resource Management',
            year_of_passing: '2000',
            institute_attended: 'GC University Lahore',
          },
          {
            q_id: '35',
            fm_id: '1563671690',
            degree_tittle: 'M.Phil in Human Resource Management',
            year_of_passing: '2002',
            institute_attended: 'GC University Lahore',
          },
        ],
      },
      {
        fm_id: '1672357863',
        fm_name: 'Dr. Ghazal Mir Zulfiqar',
        fm_address: 'house no 16, street no 01,new Karachi',
        fm_designation: 'Associate Professor in LUMS',
        fm_salary: '212000',
        qualification: [
          {
            q_id: '42',
            fm_id: '1672357863',
            degree_tittle: 'PhD in Public Policy',
            year_of_passing: '1991',
            institute_attended: 'University of Massachusetts, Boston',
          },
          {
            q_id: '43',
            fm_id: '1672357863',
            degree_tittle: 'MSc in Development Finance',
            year_of_passing: '1998',
            institute_attended:
              'Univesrity of London, School of Oriental and African Studies (SOAS)',
          },
          {
            q_id: '44',
            fm_id: '1672357863',
            degree_tittle: 'MBA in Development Finance',
            year_of_passing: '2004',
            institute_attended:
              ' Institute of Business Administration, Karachi.',
          },
        ],
      },
      {
        fm_id: '1768504953',
        fm_name: 'Dr. Hasan Ali Khattak',
        fm_address: 'House no 1,street no 12 ,islamabad',
        fm_designation: 'ASSOCIATE PROFESSOR IN NUST',
        fm_salary: '85000',
        qualification: [
          {
            q_id: '70',
            fm_id: '1768504953',
            degree_tittle:
              'Ph.D. in Electrical and Computer Engineering (Semantic Web of Things)',
            year_of_passing: '2014',
            institute_attended: 'Polytechnic Institute of Bari',
          },
        ],
      },
      {
        fm_id: '1808442571',
        fm_name: 'Dr. Muhammad Imran Malik',
        fm_address: 'house no 29, street no 01,Lahore',
        fm_designation: 'Assistant Professor in NUST',
        fm_salary: '273000',
        qualification: [
          {
            q_id: '74',
            fm_id: '1808442571',
            degree_tittle: 'BS (Computer Sciences)',
            year_of_passing: '2004',
            institute_attended: 'Allama Iqbal Open University',
          },
          {
            q_id: '75',
            fm_id: '1808442571',
            degree_tittle: 'M.Phil (Artificial Intelligence)',
            year_of_passing: '2011',
            institute_attended: 'UniversitÃ¤t Kaiserslautern',
          },
          {
            q_id: '76',
            fm_id: '1808442571',
            degree_tittle:
              'Doctor of Engineering (Machine Learning for Forensic Document Analysis)',
            year_of_passing: '2015',
            institute_attended: 'UniversitÃ¤t Kaiserslautern',
          },
        ],
      },
      {
        fm_id: '1934180475',
        fm_name: 'Dr. Usman Zabit',
        fm_address: 'House no 18,street no 3,D-chowk,Islamabad',
        fm_designation: 'PROFESSOR IN NUST',
        fm_salary: '123000',
        qualification: [
          {
            q_id: '56',
            fm_id: '1934180475',
            degree_tittle: 'BSc Electrical Engineering',
            year_of_passing: '2001',
            institute_attended:
              'University of Engineering and Technology Taxila',
          },
          {
            q_id: '57',
            fm_id: '1934180475',
            degree_tittle:
              'Master (MICROWAVES ELECTROMAGNETISM OPTO-ELECTRONICS)',
            year_of_passing: '2006',
            institute_attended: 'Institut National Polytechnique de Toulouse',
          },
          {
            q_id: '58',
            fm_id: '1934180475',
            degree_tittle: 'PhD (OPTO-ELECTRONICS)',
            year_of_passing: '2010',
            institute_attended: 'Institut National Polytechnique de Toulouse',
          },
        ],
      },
      {
        fm_id: '1940409933',
        fm_name: 'Rafia Mumtaz',
        fm_address: 'House no 15,street no 4,Islamabad',
        fm_designation: 'ASSOCIATE PROFESSOR IN NUST',
        fm_salary: '178000',
        qualification: [
          {
            q_id: '59',
            fm_id: '1940409933',
            degree_tittle: ' Bachelor of Engineering in Software Engineering ',
            year_of_passing: '2004',
            institute_attended: 'Fatima Jinnah Women University',
          },
          {
            q_id: '60',
            fm_id: '1940409933',
            degree_tittle: ' MS in Software Engineering ',
            year_of_passing: '2006',
            institute_attended:
              'National University of Sciences and Technology',
          },
          {
            q_id: '61',
            fm_id: '1940409933',
            degree_tittle:
              'PhD in Electronic Engineering (REMOTE SENSING AND SATELLITE IMAGE PROCESSIN)',
            year_of_passing: '2010',
            institute_attended: 'University of Surrey',
          },
        ],
      },
      {
        fm_id: '1957033755',
        fm_name: 'Dr. Muhammad Abdur Rahman Malik',
        fm_address: 'Flat no 115,ravi heights,Lahore',
        fm_designation: 'Associate Professor in LUMS',
        fm_salary: '175000',
        qualification: [
          {
            q_id: '20',
            fm_id: '1957033755',
            degree_tittle: 'Mechanical Engineering',
            year_of_passing: '1998',
            institute_attended: 'UET Lahore',
          },
          {
            q_id: '21',
            fm_id: '1957033755',
            degree_tittle: 'Co-Faculty Lead',
            year_of_passing: '2004',
            institute_attended: 'LUMS',
          },
        ],
      },
      {
        fm_id: '2083890674',
        fm_name: 'Mr. Hashir Moheed Kiani',
        fm_address: 'House no 2,Street No 4,Lahore',
        fm_designation: 'Assistant Professor in NUST',
        fm_salary: '180000',
        qualification: [
          {
            q_id: '77',
            fm_id: '2083890674',
            degree_tittle: 'Electrical Engineering (Telecommunication)',
            year_of_passing: '2011',
            institute_attended:
              'National University of Sciences and Technology',
          },
          {
            q_id: '78',
            fm_id: '2083890674',
            degree_tittle: 'MS (Communications Engineering and Networks)',
            year_of_passing: '2013',
            institute_attended: 'University of Birmingham',
          },
          {
            q_id: '79',
            fm_id: '2083890674',
            degree_tittle: 'PhD (Computer Science)',
            year_of_passing: '2020',
            institute_attended: 'University of Manchester',
          },
        ],
      },
      {
        fm_id: '2095886060',
        fm_name: 'Dr. Muhammad Ghufran Ahmad',
        fm_address: 'House no 17,street no 7,johar town, Lahore',
        fm_designation: 'Associate Professor in LUMS',
        fm_salary: '212000',
        qualification: [
          {
            q_id: '24',
            fm_id: '2095886060',
            degree_tittle: 'Management Sciences',
            year_of_passing: '2009',
            institute_attended:
              'Lahore University of Management Sciences (LUMS)',
          },
          {
            q_id: '25',
            fm_id: '2095886060',
            degree_tittle: 'MBA in the career dynamics',
            year_of_passing: '2012',
            institute_attended:
              'Lahore University of Management Sciences (LUMS)',
          },
        ],
      },
    ],
    isLoading: false,
    error: null,
    message: null,
    oldUser: null,
    success: false,
  }
  return (
    <div className={BoxmodelCss.container}>
      <div className={BoxmodelCss.body}>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Degree_Title</th>
            <th>Year_of_Passing</th>
            <th>Institute_Attended</th>
            <th>Actions</th>
          </tr>
          {initialUserState.users.map((i, j) => (
            <RecordGen
              key={j}
              user={initialUserState.users[j]}
              counter={j + 1}
              toggleForm={toggleForm}
            />
          ))}
        </table>
        {/* {isLoading ? <Spinner /> : null} */}
      </div>
    </div>
  )
}

export default Boxmodel
