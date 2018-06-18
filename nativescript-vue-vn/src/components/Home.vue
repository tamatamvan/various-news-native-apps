<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World 123</Button>
    </StackLayout>

  </Page>
</template>
