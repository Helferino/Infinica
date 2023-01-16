<template>
  <div>
    <PhraseSearch>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis leo, sagittis quis porta eu, porta at mi. Etiam at risus pretium sem porta dictum. Duis gravida fermentum urna, at pretium felis vestibulum a. Vivamus ut neque risus. Pellentesque consequat rhoncus arcu in dignissim. In semper justo eget mi ultricies cursus. Phasellus lobortis orci sit amet sapien posuere pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Vestibulum eget dolor auctor velit accumsan semper eu id est. Praesent mollis at velit sit amet porta. In hendrerit est in molestie convallis. Sed cursus ex vitae pellentesque blandit. Praesent tempus nulla non tempor molestie. Sed accumsan tempus elit, sed tincidunt sem finibus cursus. Nunc mollis dolor mi, ut tristique est egestas a. Suspendisse sed purus sed est dictum tempor. Morbi mollis mollis nisi viverra efficitur. Nunc interdum nibh vel nulla lacinia vulputate. Mauris ac mattis est, ac maximus quam. Donec arcu ligula, gravida et dolor sit amet, cursus tempor risus.</p>
      <p>Morbi maximus, nunc ac elementum euismod, urna turpis faucibus libero, ut vulputate lorem massa non enim. Phasellus sit amet turpis sodales, venenatis metus ut, viverra est. Sed tempus et neque a ullamcorper. Nullam mattis in sapien et mollis. Proin hendrerit, enim quis pellentesque porttitor, lectus augue tincidunt neque, pulvinar elementum turpis leo sit amet neque. Donec nec ligula mauris. Vivamus auctor eget justo a porttitor. Nam eget finibus nibh, at vulputate erat. Suspendisse massa erat, venenatis sit amet euismod non, gravida sit amet lacus. Morbi velit diam, porttitor eget sem at, sollicitudin tempus mauris.</p>

      <!-- Custom input can be defined like -->
      <!--
      <template #toolbar="{ search }">
        <input @change="search" />
      </template>
      -->

    </PhraseSearch>

    <NewsTicker class="ticker" :speed="5"/>
  </div>
</template>

<style>
.ticker {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
