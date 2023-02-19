<script>
  import DrumPad from "./DrumPad.svelte";

  const DATA = [
    {
      key: "Q",
      audioName: "Heater 1",
      audioLink:
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      key: "W",
      audioName: "Heater 2",
      audioLink:
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      key: "E",
      audioName: "Heater 3",
      audioLink:
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      key: "A",
      audioName: "Heater 4",
      audioLink:
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      key: "S",
      audioName: "Clap",
      audioLink:
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      key: "D",
      audioName: "Open HH",
      audioLink:
        "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      key: "Z",
      audioName: "Kick n' Hat",
      audioLink:
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      key: "X",
      audioName: "Kick",
      audioLink:
        "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      key: "C",
      audioName: "Closed HH",
      audioLink:
        "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  export let lastBtnName;
</script>

<div class="peer border-4 bg-blue-50 border-blue-500 hover:shadow-xl p-4 grid grid-cols-3 gap-4 hover:rounded-2xl rounded-t-2xl hover:-translate-y-2 transition">
  {#each DATA as { key, audioName, audioLink }}
    <DrumPad
      {key}
      {audioName}
      {audioLink}
      bind:lastBtnName
    />
  {/each}
</div>
