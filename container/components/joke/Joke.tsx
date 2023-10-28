import { View, Text, ScrollView } from "react-native";
import { Data, NoneData } from "../../data/joke-data/JokeData";
import { styles } from "./style";
import LikeButton from "../button/like-button/LikeButton";
import DislikeButton from "../button/dislike-button/DislikeButton";
import React, { useState } from 'react';
import { saveVoteCookie } from "../../data/cookie/UserCookie";

export enum StateVote {
  DISLIKE = 0,
  LIKE = 1
}

export type VoteProps = {
  id: number,
  state: StateVote
}


const Joke = () => {

  const [IndexOfDataToJoke, setIndexOfDataToJoke] = useState(0)
  const handleAfterVote = () => {
    setIndexOfDataToJoke(IndexOfDataToJoke + 1);
  }

  const [VoteValues, setVoteValues] = useState<VoteProps[]>([]);
  const VoteAction = (props: VoteProps) => {
    setVoteValues([...VoteValues, props]);
    //saveVoteCookie(props);
  }

  console.log(VoteValues);

  const VoteLikeAction = Data[IndexOfDataToJoke] && {
    id: Data[IndexOfDataToJoke].id,
    state: StateVote.LIKE
  }
  const VoteDislikeAction = Data[IndexOfDataToJoke] && {
    id: Data[IndexOfDataToJoke].id,
    state: StateVote.DISLIKE
  }

  return(
    <ScrollView>

      <View style={styles.jokeTitle}>
        <Text style={styles.textTitle}> A joke a day keeps the doctor away </Text>
        <Text style={styles.textDescription}> If you joke wrong way, your teeth have to pay. (Serious) </Text>
      </View>

      {
        Data[IndexOfDataToJoke]
        ?

          <View>
            <View>
              <Text style={styles.textContent}>
                {Data[IndexOfDataToJoke].jokeContent}
              </Text>
            </View>

            <View style={styles.voteButton}>
              <View style={styles.voteLikeButton}>
                <LikeButton 
                  jokeDataVote={VoteLikeAction} 
                  voteAction={VoteAction}
                  handleAfterVote={handleAfterVote}
                />
              </View>
              
              <View style={styles.voteUnlikeButton}>
                <DislikeButton 
                  jokeDataVote={VoteDislikeAction} 
                  voteAction={VoteAction}
                  handleAfterVote={handleAfterVote}
                />
              </View>
            </View>

          </View>  
        
        : 
      
          <View style={styles.noneData}>
            <Text style={styles.noneDataText}> {NoneData} </Text>
          </View>
      }

      
    </ScrollView>
  )
}

export default Joke;

