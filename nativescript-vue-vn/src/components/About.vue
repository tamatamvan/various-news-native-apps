<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="$route.meta.title">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout class="hello-world">
      <Label class="text-center" textWrap=true text="Various News App - NativeScript-Vue Version"/>
      <Label class="text-center" text="By: tamatamvan"/>
    </StackLayout>

  </Page>
</template>

<style scoped>
  .hello-world {
    margin: 20;
  }
  .text-center {
    text-align: center;
  }
</style>
