import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from 'src/components/Button';
import NavHeader from 'src/components/NavHeader';
import { StackScreen } from 'src/components/Screen';
import { t } from 'src/utils/i18n';

const Container = styled(StackScreen)``;

const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.color.gray.c500,
}))`
  padding: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c900};
  border-radius: 10px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.gray.c900};
`;

const Content = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;

const Text = styled.Text`
  text-align: center;
  margin-bottom: 20px;
  font-size: 48px;
  font-family: ${({ theme }) => theme.fontFamily.inter.bold};
  color: ${({ theme }) => theme.color.primary.c600};
`;

interface LoginLayoutProps {
  onLogin: (email: string, password: string) => void;
}

export default function LoginLayout({ onLogin }: LoginLayoutProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <NavHeader title={t('login')} />
      <Content>
        <Text>{'Rick and Morty'}</Text>
        <TextInput
          testID={'text-input-email'}
          value={email}
          placeholder={t('email')}
          onChangeText={setEmail}
        />
        <TextInput
          testID={'text-input-password'}
          value={password}
          placeholder={t('password')}
          secureTextEntry
          onChangeText={setPassword}
        />
        <Button
          testID={'button-login'}
          text={t('login')}
          disabled={email.length === 0 || password.length === 0}
          onPress={() => onLogin(email, password)}
        />
      </Content>
    </Container>
  );
}
