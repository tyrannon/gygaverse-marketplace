import { useState } from 'react';
import './App.css';
import { Footer, NavBar, PurchasePage, EventPage } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({ user, signOut }) {
  // State
  // const [showEvents, setShowEvents] = useState(true)
  const [showPurchase, setShowPurchase] = useState(false)
  const [showEventDetail, setShowEventDetail] = useState(true)

  // Overrides

  // NavBar Overrides
   const navBarOverrides = {
    // Gygaverse Logo
    image: {
      style: {
        cursor: "pointer"
      },
    },
    // Signout button
    Button: {
      onClick: signOut,
    },
  }

  // EventDetailCollection Overrides
  const eventPageOverrides = {
    // mouse cursor pointer on hover over event
    'event-image': {
      style: {
        cursor: "pointer"
      },
      // click to open the purchase window
      onClick: () => {
        console.log(user);
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

export default withAuthenticator(App);
