import SignupForm from "@/components/Signup/Signup.tsx";
import React from 'react';
import { ScrollView } from 'react-native';

export default function SignUp() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SignupForm />
    </ScrollView>
  );
}
