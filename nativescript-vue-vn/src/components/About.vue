<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Hello world">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout class="hello-world">
      <Label class="body" textWrap=true text="Various News App - NativeScript-Vue Version"/>
      <Label text="By: tamatamvan"/>
    </StackLayout>

  </Page>
</template>

<style scoped>
  .hello-world {
    margin: 20;
  }

  Label {
    color: red;
  }
</style>
