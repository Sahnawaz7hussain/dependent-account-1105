import React from "react";

import { Grid, Image } from "semantic-ui-react";

import { Link } from "react-router-dom";

export const SnacksStore = () => (
  <div>
    <p style={{ textAlign: "center", fontSize: "20px" }}>Snacks Store</p>
    <div className="ui clearing divider"></div>
    <Link to="/products">
      {" "}
      <Grid doubling columns={6}>
        <Grid.Column>
          <div className="HoverEffect">
            <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/3d61f24a-f544-423d-8af6-ed2674f7061f/hp_chips-nachos-snacksStorefront_m_480_251122_01.jpg" />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="HoverEffect">
            <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/3d61f24a-f544-423d-8af6-ed2674f7061f/hp_frozen-foods-snacksStorefront_m_480_251122_02.jpg" />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="HoverEffect">
            <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/3d61f24a-f544-423d-8af6-ed2674f7061f/hp_noodles-pasta-snacksStorefront_m_480_251122_03.jpg" />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="HoverEffect">
            <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/3d61f24a-f544-423d-8af6-ed2674f7061f/hp_biscuits-cookies-snacksStorefront_m_480_251122_04.jpg" />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="HoverEffect">
            <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/3d61f24a-f544-423d-8af6-ed2674f7061f/hp_chocolates-sweets-snacksStorefront_m_480_251122_05.jpg" />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="HoverEffect">
            <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/3d61f24a-f544-423d-8af6-ed2674f7061f/hp_rtc-snacksStorefront_m_480_251122_06.jpg" />
          </div>
        </Grid.Column>
      </Grid>
    </Link>
  </div>
);
