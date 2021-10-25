import { createContext } from "react";
import { useQuery, gql } from "@apollo/client";

export const JobContext = createContext();

const GET_JOBS = gql`
  query GetJobs {
    allJob(sort: { _createdAt: ASC }) {
      _id
      apply
      company
      contract
      description
      location
      logoBackground
      position
      postedDate
      website
      logo {
        asset {
          url
        }
      }
      requirement {
        content
        items
      }
      role {
        content
        items
      }
    }
  }
`;

const JobContextProvider = ({ children }) => {
  const { data, loading, error } = useQuery(GET_JOBS);

  return (
    <JobContext.Provider value={{ data, loading, error }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
