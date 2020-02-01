import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

import { connect } from "react-redux";

import { Ionicons } from "@expo/vector-icons";

import { Audio } from "expo";

import CustomText from "../components/CustomText";
import PokemonFullSprite from "../components/PokemonFullSprite";
import HealthBar from "../components/HealthBar";
import ActionList from "../components/ActionList";
import MovesList from "../components/MovesList";
import PokemonList from "../components/PokemonList";

import pokemon_data from "../data/pokemon_data.js";
import moves_data from "../data/moves_data";

import uniqid from "../helpers/uniqid";
import randomInt from "../helpers/randomInt";
import shuffleArray from "../helpers/shuffleArray";

import {
  setOpponentTeam,
  setMove,
  setOpponentPokemon,
  setPokemonHealth,
  removePokemonFromTeam,
  setMessage,
  removePokemonFromOpponentTeam
} from "../actions";

class BattleScreen extends Component {
  
  render() {
    const {
      team,
      move,
      move_display_text,
      pokemon,
      opponent_pokemon,
      backToMove,

      message
    } = this.props;

    return (
      <View style={styles.container}>
        <CustomText styles={[styles.headerText]}>Fight!</CustomText>
      </View>
    );
  }
}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleScreen);

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerText: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
    alignSelf: "center"
  },
  battleGround: {
    flex: 8,
    padding: 12,
    flexDirection: "column"
  },
  currentPlayer: {
    alignSelf: "flex-start",
    alignItems: "center"
  },
  opponent: {
    alignSelf: "flex-end",
    alignItems: "center"
  },
  controls: {
    flex: 3,
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#404040"
  },
  controlsHeader: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 10
  },
  backButton: {
    paddingLeft: 5,
    paddingRight: 5
  },
  controlsHeaderText: {
    paddingTop: 5
  },
  message: {
    fontSize: 15
  }
};
