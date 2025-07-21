import CardList from '@/components/cards/CardList';
import GreetingCard from '@/components/cards/GreetingCard';
import ProfileCard from '@/components/cards/ProfileCard';
import React from 'react';
import { ScrollView } from 'react-native';

const CardsPage = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <GreetingCard message="Welcome to the Dashboard" />
      <ProfileCard />
      <br/>
      <h2>Card List Component</h2>
       <CardList/>
    </ScrollView>
   
  );
};

export default CardsPage;
