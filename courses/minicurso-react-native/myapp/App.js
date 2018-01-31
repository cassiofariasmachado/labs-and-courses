/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, TouchableOpacity, AsyncStorage } from 'react-native';

import Repo from './components/Repo'
import NewRepoModal from './components/NewRepoModal'

export default class App extends Component {

  state = {
    modalVisible: false,
    repos: []
  }

  async componentDidMount() {
    const repos = JSON.parse(await AsyncStorage.getItem('@Minicurso:repositories')) || []
    this.setState({ repos })
  }

  _toogleModal() {
    this.setState({ modalVisible: !this.state.modalVisible })
  }

  _addRepository = async (newRepoText) => {
    const repoCall = await fetch(`https://api.github.com/repos/${newRepoText}`)
    const response = await repoCall.json()

    const repository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login
    }

    this.setState({ modalVisible: false, repos: [...this.state.repos, repository] })

    await AsyncStorage.setItem('@Minicurso:repositories', JSON.stringify(this.state.repos))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Minicurso GoNative!</Text>
          <TouchableOpacity onPress={() => this._toogleModal()} >
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>
          {
            this.state.repos.map(repo => (
              <Repo key={repo.id} data={repo} />
            ))
          }
        </ScrollView>
        <NewRepoModal onCancel={() => this._toogleModal()}
          onAdd={this._addRepository}
          visible={this.state.modalVisible} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  repoList: {
    padding: 20
  }
});
