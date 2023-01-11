import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Feature as FeatureType } from '../../models';

type Props = {
  feature: FeatureType;
};

export const Feature = ({ feature }: Props) => {
  return (
    <Flex
      flexDirection={feature.reversed ? 'column-reverse' : 'column'}
      gap="1em"
    >
      <Card height="500px">
        <Image
          src={feature.image || 'https://bit.ly/dan-abramov'}
          alt="Dan Abramov"
          borderRadius="lg"
          boxSize="100%"
          objectFit="cover"
        />
      </Card>
      <Card height="200px">
        <CardHeader>
          <Heading size="md">{feature.heading}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{feature.body}</Text>
        </CardBody>
        {feature.cta && (
          <CardFooter>
            <Button onClick={feature.cta.onClick}>{feature.cta.label}</Button>
          </CardFooter>
        )}
      </Card>
    </Flex>
  );
};