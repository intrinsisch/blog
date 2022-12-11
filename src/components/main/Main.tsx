import { Component } from "solid-js";
import { BlogList } from "../blog/BlogList";
import { Sidebar } from "../side/Sidebar";

export const Main: Component = () => {
  return (
    <main class="bg-white py-5">
      <div class="container lg">
        <div class="sidebar-wrapper spa-6">
          <BlogList />
          <div class="sidebar" style="--sidebar-basis: 5rem;">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};
