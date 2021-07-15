import Contacts from '../contacts/contact/Contacts';
import ContactForm from '../contacts/contact/ContactForm';
import SearchBox from '../contacts/contact/SearchBox';
import { useEffect,useState ,useContext} from 'react';
import AuthContext from '../../context/auth/authContext'
import { useSpring, animated } from 'react-spring';
// import ContactContext from '../../context/contact/contactContext';




const Home = () => {
	const springProps1 = useSpring({ to: { opacity: 1, translateX: '0' }, from: { opacity: 0, translateX: '-30rem' }, delay: 250, });
	const springProps2 = useSpring({ to: { opacity: 1, translateX: '0' }, from: { opacity: 0, translateX: '30rem' }, delay: 250, });
	const authContext = useContext(AuthContext);
	// const contactContext = useContext(ContactContext);
	const { loadUsers } = authContext;
	// const { current } = contactContext;

	useEffect(() => {

		
		loadUsers();
		// eslint-disable-next-line
	},[])

	const [open, setOpen] = useState(false);

	const closePop =()=> {
		setOpen(!open);
}

	return (
	
		<div className="grid-2"> 
	

			<animated.div style={springProps1}>
		
				<ContactForm open={open} closePop={closePop} />
		
		</animated.div>
		


	
		

			
			<animated.div style={springProps2}>
			<div className="main-lists">
				<SearchBox />
		<h1 className="contact-lists">Contact Lists</h1>
					<Contacts openPop={()=>setOpen(true)}/>
		</div></animated.div>
	

			<button className={!open?"add-contact":"add-contact cross"} onClick={()=>setOpen(true)}><i className={!open?"fas fa-user-plus":"fas fa-times"}></i></button>
     
		</div>

	)

}

export default Home;
