import { useState } from 'react';
import './App.css';
import { Footer, NavBar, PurchasePage, EventDetail, EventPage } from './ui-components';

function App() {
  // State
  // const [showEvents, setShowEvents] = useState(true)
  const [showPurchase, setShowPurchase] = useState(false)
  const [showEventDetail, setShowEventDetail] = useState(true)

  // Overrides

  // NavBar Overrides
   const navBarOverrides = {
    // Gygaverse Logo
    image34612699: {
      style: {
        cursor: "pointer"
      },
    },
    // Signout button
    // Button: {
    //   onClick: signOut,
    // },
    // Navbar Icon right Cat
    // image: {
    //   src: user?.attributes.profile
      // src: "https://img.icons8.com/color/50/000000/cat"
    // },
    // Add Pet button left
    // "Add Pet": {
    //   // change cursor to hand on hover
    //   style: {
    //     cursor: "pointer"
    //   },
    //   // Add Pet Button top left
    //   onClick: () => {
    //     // saveFile();
    //     setShowForm(!showForm);
    //     if (showPets) setShowPets(false)
    //     else setShowPets(true);
    //   }
    // }
  }

  // EventDetailCollection Overrides
  const eventPageOverrides = {
    'event-image': {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setShowPurchase(!showPurchase);
        if (showEventDetail) setShowEventDetail(false)
        else setShowEventDetail(true);
      },
    }
  }

  // Purchase Page Overrides
  const purchasePageOverrides = {
    closePurchase: {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setShowEventDetail(!showEventDetail);
        if (showPurchase) setShowPurchase(false)
        else setShowPurchase(true);
      },
    }

  }

  // Footer Overrides
  const footerOverrides = {
    facebook: {
      style: {
        cursor: "pointer"
      },
    },
    instagram: {
      style: {
        cursor: "pointer"
      },
    },
    twitter: {
      style: {
        cursor: "pointer"
      },
    },
    discord: {
      style: {
        cursor: "pointer"
      },
    },
    "footer-gygaverse-react 1": {
      style: {
        cursor: "pointer"
      },
    },
  }

  return (
    <div className='App'>
      {/* NavBar */}
      <NavBar width={"100%"} overrides={navBarOverrides} />

      {/* Header */}
      <header className='App-header'>
        {showEventDetail && (
          <EventPage overrides={eventPageOverrides}/>
        )}
        
        {showPurchase && (
          <PurchasePage overrides={purchasePageOverrides}/>
        )}


      </header>

      {/* Footer */}
      <Footer width={"100%"} overrides={footerOverrides} />
    </div>
  );
}

export default App;
