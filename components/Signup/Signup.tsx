import { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isValid, setIsValid] = useState(false);
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const validate = () => {
    const newErrors: typeof errors = {};
    if (name.trim().length === 0) newErrors.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Email is invalid';

    setErrors(newErrors);
    const valid = Object.keys(newErrors).length === 0;
    setIsValid(valid);
    if (!valid) triggerShake();
    return valid;
  };

  const triggerShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 6, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -6, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Form submitted:", { name, email });
    }
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX: shakeAnim }] }]}>
      <Text style={styles.heading}>Signup Form</Text>

      <TextInput
        placeholder="Name"
        style={[styles.input, errors.name && styles.inputError]}
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      <TextInput
        placeholder="Email"
        style={[styles.input, errors.email && styles.inputError]}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <TouchableOpacity
        style={[styles.button, isValid && styles.validButton]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ccc', // Default button color (gray)
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  validButton: {
    backgroundColor: '#28a745', // Green when form is valid
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});