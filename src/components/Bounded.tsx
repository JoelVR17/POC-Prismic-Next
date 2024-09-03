"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo-client";
import { Providers } from "@/redux/provider";

type BoundedProps = {
  children: React.ReactNode;
};

const Bounded = ({ children }: BoundedProps) => {
  return (
    <ApolloProvider client={client}>
      <Providers>
        <div className={"px-4 py-10 md:py-14 md:px-6 lg:py-16"}>
          <div className="mx-auto w-full max-w-6xl">{children}</div>
        </div>
      </Providers>
    </ApolloProvider>
  );
};

export default Bounded;
